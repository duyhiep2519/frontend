import LoopIcon from '@material-ui/icons/Loop';
import AutoSearchInput from 'components/UI/AutoSearchInput';
import InfiniteScroll from 'components/UI/InfiniteScroll';
import WordSortModal from 'components/UI/WordSortModal';
import PropTypes from 'prop-types';
import React from 'react';
import MyDictionaryItemData from '../Item/data';
import MyDictionarySkeleton from '../Skeleton';
import useStyle from '../style';

function FavoriteDictionary({
  list,
  loading,
  onLoadData,
  more,
  isFirstLoad,
  onSortTypeChange,
  onSearchWord,
}) {
  const classes = useStyle();

  return (
    <div className={`${classes.root} My-container`}>
      {/* title - menu */}
      <div className="flex-center-between">
        <h1 className="My-title">Từ điển của bạn</h1>
        <div>
          <WordSortModal
            onSelect={onSortTypeChange}
            classNameIcon="My-setting-icon mr-5"
          />
        </div>
      </div>
      <div className="My-break"></div>

      {/* list content */}
      <div className={classes.contentWrap}>
        <AutoSearchInput disabled={loading} onSearch={onSearchWord} />

        <div className={`${classes.listWrap} w-100`}>
          <ul id="dictionaryId" className={`${classes.list} flex-col w-100`}>
            <>
              {isFirstLoad ? (
                <MyDictionarySkeleton className={classes.skeleton} />
              ) : (
                <>
                  {list && list.length > 0 ? (
                    <>
                      {/* render list */}
                      {list.map((item, index) => (
                        <li className={classes.listItem} key={index}>
                          <MyDictionaryItemData {...item} />
                        </li>
                      ))}

                      {/* infinite scrolling */}
                      {!loading && more && (
                        <InfiniteScroll
                          onTouchAnchor={onLoadData}
                          threshold={1}>
                          <div className="w-100 t-center">
                            <LoopIcon className="ani-spin" />
                          </div>
                        </InfiniteScroll>
                      )}
                    </>
                  ) : (
                    // empty list
                    <h3 className="notfound-title h-100 flex-center t-center">
                      Bạn chưa đánh dấu từ yêu thích nào cả. Hãy thêm từ yêu
                      thích bằng cách bấm vào hình trái tim ngay bên từ vựng đó
                      nhé 😉
                    </h3>
                  )}
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

FavoriteDictionary.propTypes = {
  isFirstLoad: PropTypes.bool,
  isTOEIC: PropTypes.bool,
  list: PropTypes.array,
  loading: PropTypes.bool,
  more: PropTypes.bool,
  onLoadData: PropTypes.func,
  onSearchWord: PropTypes.func,
  onSettingWordPack: PropTypes.func,
  onSortTypeChange: PropTypes.func,
};

FavoriteDictionary.defaultProps = {
  list: [],
  loading: false,
  more: true,
  isFirstLoad: true,
  isTOEIC: false,
  onLoadData: function () {},
  onSearchWord: function () {},
  onSettingWordPack: function () {},
  onSortTypeChange: function () {},
};

export default FavoriteDictionary;
