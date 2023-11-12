export interface Record {
  title: string;
  content: string;
  impression: string;
}

export interface RecordPost extends Record {
  profileImg: string;
  author: string;
  createdAt: string; // Date로 수정 필요
}
