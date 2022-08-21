import moment from "moment";

export const timeAgoFormat = (date: string) => {
  return moment(+date).fromNow();
};
