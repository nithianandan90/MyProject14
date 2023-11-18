import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>
        Comment Comment Comment
      </Text>
      <AntDesign
        name={'hearto'}
        size={16}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
  },
  icon: {marginHorizontal: 5},
  footer: {
    padding: 10,
  },
  bold: {fontWeight: fonts.weight.bold},
  text: {
    color: colors.black,
    lineHeight: 18,
  },
});
