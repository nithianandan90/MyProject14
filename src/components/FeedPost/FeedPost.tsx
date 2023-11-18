import {Image, StyleSheet, Text, View} from 'react-native';
import fonts from '../../themes/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../themes/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Nithi</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        <Text>
          Liked by <Text style={styles.bold}>user</Text> and{' '}
          <Text style={styles.bold}>66</Text> others
        </Text>

        {/* Post decsription */}
        <Text style={styles.text}>
          <Text style={styles.bold}>User </Text>
          Description Description Description Description Description
          Description Description Description
        </Text>
        {/* comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>User </Text>
            Comment Comment Comment
          </Text>
          <AntDesign
            name={'hearto'}
            size={16}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        <Text>19 December 2022</Text>
      </View>
    </View>
  );
};

export default FeedPost;
