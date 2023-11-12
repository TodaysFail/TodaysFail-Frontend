import { DropDownMenuType } from '@/types/menu';
import { RecordPost } from '@/types/record';
import DropDown from '@components/atoms/DropDown';
import ProfileImage from '@components/atoms/ProfileImage';
import Typography from '@components/atoms/Typography';
import styled from 'styled-components';

function FeedCardHeader({ recordPost }: { recordPost: RecordPost }) {
  const dropDownMenuList: DropDownMenuType[] = [
    {
      text: '삭제하기',
      handleClickMenu: () => {
        console.log('삭제');
      },
    },
    {
      text: '수정하기',
      handleClickMenu: () => {
        console.log('수정');
      },
    },
  ];

  return (
    <div>
      <CardHeader>
        <FeedInfo>
          <ProfileImage src={recordPost.profileImg} />
          <div>
            <Typography $level="body3">{recordPost.author}</Typography>
            <Typography $level="overline">{recordPost.createdAt}</Typography>
          </div>
        </FeedInfo>
        <DropDown dropDownMenuList={dropDownMenuList} />
      </CardHeader>
    </div>
  );
}

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

const FeedInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default FeedCardHeader;
