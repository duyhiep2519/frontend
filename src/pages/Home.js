import Grid from '@material-ui/core/Grid';

import communicateImg from 'assets/images/communicate.jpg';
import dictionaryImg from 'assets/images/dictionary.jpg';
import flashImg from 'assets/images/flashCard.jpg';
import loveImg from 'assets/images/love.jpg';
import studyImg from 'assets/images/study.jpg';
import wordImg from 'assets/images/word.jpg';
import irreImg from 'assets/images/irre.jpeg';
import grammarImg from 'assets/images/grammar.jpeg';
import gameImg from 'assets/images/game.jpeg';
import rankImg from 'assets/images/rank.jpg';
import contributeImg from 'assets/images/contribute.jpeg';
import FeatureCard from 'components/UI/FeatureCard';
import { ROUTES } from 'constant';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React from 'react';

const FEATURE_LIST = [
  {
    title: 'Bảng phiên âm (IPA)',
    subTitle:
      'Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA',
    imgUrl: wordImg,
    to: ROUTES.IPA,
  },
  {
    title: '1000+ câu giao tiếp',
    subTitle: 'Luyện nghe, nói câu tiếng Anh giao tiếp hàng ngày',
    imgUrl: communicateImg,
    to: ROUTES.COMMUNICATION_PHRASE,
  },
  {
    title: 'Từ vựng với Flashcard',
    subTitle:
      'Flashcard phương pháp học từ vựng nổi tiếng. Nay hoàn toàn miễn phí',
    imgUrl: flashImg,
    to: ROUTES.FLASHCARD,
  },
  {
    title: 'Từ điển',
    subTitle: 'Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...',
    imgUrl: dictionaryImg,
    to: ROUTES.My_DICTIONARY,
  },
  {
    title: 'Từ vựng TOEIC',
    subTitle: 'Các từ vựng thường gặp trong đề thi Toeic',
    imgUrl: studyImg,
    to: ROUTES.TOEIC_DICTIONARY,
  },
  {
    title: 'Từ vựng yêu thích của bạn',
    imgUrl: loveImg,
    subTitle: 'Danh sách những từ vựng yêu thích mà bạn đã lưu',
    to: ROUTES.FAVORITE,
  },
  {
    title: 'Động từ bất quy tắc',
    imgUrl: irreImg,
    subTitle: 'Tất cả những động từ bất quy tắc trong tiếng Anh',
    to: ROUTES.IRREGULAR,
  },
  {
    title: 'Ngữ pháp',
    imgUrl: grammarImg,
    subTitle: 'Danh sách tổng hợp những cấu trúc câu trong tiếng Anh',
    to: ROUTES.GRAMMAR,
  },
  {
    title: 'Play Games',
    imgUrl: gameImg,
    subTitle:
      'Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game',
    to: ROUTES.GAMES.HOME,
  },
  {
    title: 'Bảng xếp hạng',
    imgUrl: rankImg,
    subTitle: 'Cùng xem thành tích của bạn bè và những người khác nhé',
    to: ROUTES.LEADERBOARD,
  },
  {
    title: 'Đóng góp',
    imgUrl: contributeImg,
    subTitle:
      'Rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai',
    to: ROUTES.CONTRIBUTION,
  },
];

function HomePage() {
  useTitle('Ứng dụng học tiếng Anh miễn phí');
  useScrollTop();

  return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {FEATURE_LIST.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <FeatureCard
              key={index}
              imgUrl={box.imgUrl}
              title={box.title}
              to={box.to}
              subTitle={box.subTitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
