import MyText from 'components/elements/MyText'
import { Colors } from 'constants/colors'
import React from 'react'
import { StyleSheet, View, ScrollView, Image } from 'react-native'
import ProfileInfo from 'components/modules/profiles/ProfileInfo'
import { NavigationRoutes } from 'constants/routes'
import { NavigationProp, useTheme } from '@react-navigation/native'
import Avatar from 'components/elements/Avatar'
import Icon from 'components/elements/Icon'
import { backgroundColor } from 'styles/colors'

const userProfile = {
  image:
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA',
  name: 'Shahrukh Khan',
  contact: '+977 9861172830',
  email: 'luitel.suraj@webexpertsnepal.com',
  role: 'Front-end Developer',
}

const ProfileScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const { colors } = useTheme()
  return (
    <ScrollView
      style={[profileStyles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={profileStyles.infoContainer}>
        <View style={profileStyles.imageContainer}>
          <Avatar
            image={userProfile.image}
            imageStyles={profileStyles.image}
            name={userProfile.name}
          />
        </View>

        <View style={profileStyles.nameWrapper}>
          <MyText fontStyle={'bold'} style={{ textTransform: 'uppercase', fontSize: 22 }}>
            {userProfile.name}
          </MyText>
          <MyText
            fontStyle={'bold'}
            hasCustomColor={true}
            style={{ color: Colors.wenBlue, fontSize: 15 }}
          >
            {userProfile.role}
          </MyText>
        </View>
      </View>

      <View
        style={{ ...profileStyles.Wrapper, ...profileStyles.shadow, backgroundColor: colors.card }}
      >
        <ProfileInfo
          icon={<Icon name="Mobile" width={35} height={35} isFill fill={colors.text} />}
          text1={'Phone Number'}
          text2={userProfile.contact}
          extraStyles={{ borderBottomWidth: 1, borderBottomColor: colors.border }}
        />

        <ProfileInfo
          icon={<Icon name="Email" width={35} height={35} isStroke stroke={colors.text} />}
          text1={'Email'}
          text2={userProfile.email}
        />
      </View>

      <View style={{ marginTop: 45 }}>
        <MyText fontStyle={'bold'} style={{ fontSize: 18 }}>
          Basic Information
        </MyText>
        <View
          style={{
            ...profileStyles.Wrapper,
            ...profileStyles.shadow,
            marginTop: 5,
            backgroundColor: colors.card,
          }}
        >
          <ProfileInfo
            hasIcon={true}
            icon={<Icon name="User" width={35} height={35} isFill fill={colors.text} />}
            text1={'My Information'}
            text2={'View your basic information'}
            extraStyles={{ borderBottomWidth: 1, borderBottomColor: colors.border }}
          />

          <ProfileInfo
            icon={<Icon name="Logout" width={35} height={35} isFill fill={colors.text} />}
            text1={'Logout'}
            text2={'Logout of this app'}
            hasIcon={true}
          />
        </View>
      </View>

      <View style={{ marginTop: 45 }}>
        <MyText fontStyle={'bold'} style={{ fontSize: 18 }}>
          Security Settings
        </MyText>
        <View
          style={{
            ...profileStyles.Wrapper,
            ...profileStyles.shadow,
            marginTop: 5,
            backgroundColor: colors.card,
          }}
        >
          <ProfileInfo
            icon={<Icon name="Lock" width={35} height={35} isFill fill={colors.text} />}
            text1={'Change Password'}
            text2={'Change Password'}
            extraStyles={{ borderBottomWidth: 1, borderBottomColor: colors.border }}
            hasIcon={true}
            onPress={() => navigation.navigate(NavigationRoutes.ResetPasswordForm)}
          />

          <ProfileInfo
            icon={<Icon name="FingerPrint" width={35} height={35} isFill fill={colors.text} />}
            text1={'Setup Biometrics'}
            text2={'Setup Biometrics'}
            hasIcon={true}
          />
        </View>
      </View>

      <View style={{ height: 45 }}></View>
    </ScrollView>
  )
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 25,
    backgroundColor: '#ffffff',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'rgba(66, 66, 67, 0.11)',
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  nameWrapper: {
    display: 'flex',
    rowGap: 5,
  },
  Wrapper: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})

export default ProfileScreen
