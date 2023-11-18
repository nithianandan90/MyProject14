import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../themes/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import {useState} from 'react';
import DoublePressable from '../DoublePressable';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isDecriptionExpanded, setIsDecriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDecriptionExpanded = () => {
    setIsDecriptionExpanded(k => !k);
  };

  const toggleLike = () => {
    setIsLiked(k => !k);
  };

  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* content */}
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
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
          <Text style={styles.bold}>{post.nofLikes}</Text> others
        </Text>

        {/* Post decsription */}
        <Text numberOfLines={isDecriptionExpanded ? 3 : 1} style={styles.text}>
          <Text style={styles.bold}>User </Text>
          {post.description}
        </Text>
        <Text onPress={toggleDecriptionExpanded}>
          {isDecriptionExpanded ? 'less' : 'more'}
        </Text>
        {/* comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
