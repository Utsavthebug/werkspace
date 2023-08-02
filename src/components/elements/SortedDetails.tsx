import { SectionList, StyleSheet, View } from 'react-native'
import React from 'react'
import moment from 'moment'
import MyText from './MyText'
import NotificationCard from 'components/modules/notifications/Card'

interface DetailsProp {
  id: string
  title: string
  date: string
  time: string
  type: string
  image?: string
  details?: string
  CustomIcon?: string
  typeColor?: string
  typeTextColor?: string
}

const SortedDetails = ({
  data,
  showDelete = false,
}: {
  data: DetailsProp[]
  showDelete?: Boolean
}) => {
  const currentDate = moment().format('YYYY-MM-DD')
  const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
  const sortedData = data.sort((a, b) => moment(b.date).diff(moment(a.date)))

  const customizedData = sortedData.map((item) => {
    if (item.type === 'Leave') {
      return {
        ...item,
        CustomIcon: 'LeaveNotify',
        typeColor: '#E6ECFF',
        typeTextColor: '#4E63C6',
      }
    }
    if (item.type === 'Notice') {
      return {
        ...item,
        CustomIcon: 'Notice',
        typeColor: '#E6ECFF',
        typeTextColor: '#4E63C6',
      }
    }
    if (item.type === 'Refreshment') {
      return {
        ...item,
        CustomIcon: 'Notice',
        typeColor: 'rgba(247, 79, 117, 0.35)',
        typeTextColor: '#F74F75',
      }
    }
    if (item.type === 'Blog') {
      return {
        ...item,
        CustomIcon: 'Blog',
        typeColor: '#E6ECFF',
        typeTextColor: '#4E63C6',
      }
    }
    if (item.type === 'Event') {
      return {
        ...item,
        CustomIcon: 'Event',
        typeColor: '#E6ECFF',
        typeTextColor: '#606060',
      }
    } else return item
  })

  // Gathering last seven days
  const lastSevenDays: string[] = []

  let today = moment()
  for (let i = 0; i < 7; i++) {
    today = today.subtract(1, 'days')
    lastSevenDays.push(today.format('YYYY-MM-DD'))
  }

  const eventsToday: DetailsProp[] = []
  const eventsYesterday: DetailsProp[] = []
  const lastWeekEvents: DetailsProp[] = []
  const pastEvents: DetailsProp[] = []
  const futureEvents: DetailsProp[] = []

  customizedData.forEach((item: any) => {
    const momentDate = moment(item.date, 'YYYY-MM-DD')
    if (item.date === currentDate) {
      eventsToday.push(item)
    } else if (item.date === yesterday) {
      eventsYesterday.push(item)
    } else if (lastSevenDays.includes(item.date)) {
      lastWeekEvents.push(item)
    } else if (today.diff(momentDate) < 0) {
      futureEvents.push(item)
    } else {
      pastEvents.push(item)
    }
  })

  const DATA = [
    { title: 'UPCOMING', data: futureEvents },
    { title: 'TODAY', data: eventsToday },
    { title: 'YESTERDAY', data: eventsYesterday },
    { title: 'LAST WEEK', data: lastWeekEvents },
    { title: 'PAST', data: pastEvents },
  ]

  const content =
    data.length > 0 ? (
      <View style={styles.root}>
        <SectionList
          sections={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationCard
              title={item.title}
              date={item.date}
              type={item.type}
              time={item.time}
              image={item.image}
              showDelete={showDelete}
              TypeIcon={item.CustomIcon || 'Notice'}
              typeColor={item.typeColor}
              typeTextColor={item.typeTextColor}
              details={item.details}
            />
          )}
          renderSectionHeader={({ section: { title, data } }) =>
            data.length ? <MyText style={styles.header}>{title}</MyText> : null
          }
        />
      </View>
    ) : (
      <MyText>Nothing Here Right Now.</MyText>
    )

  return content
}

export default SortedDetails

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
})
