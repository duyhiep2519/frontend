import LoopIcon from '@material-ui/icons/Loop';
import AutoSearchInput from 'components/UI/AutoSearchInput';
import InfiniteScroll from 'components/UI/InfiniteScroll';
import WordSortModal from 'components/UI/WordSortModal';
import PropTypes from 'prop-types';
import React from 'react';
import MyDictionaryItemData from './Item/data';
import DDSettingWordPack from './SettingWordPack';
import MyDictionarySkeleton from './Skeleton';
import useStyle from './style';

function MyDictionary({
  list,
  loading,
  onLoadData,
  more,
  isFirstLoad,
  onSettingWordPack,
  onSortTypeChange,
  onSearchWord,
  isTOEIC,
}) {
  const classes = useStyle();

  return (
    <div className={`${classes.root} My-container`}>
      {/* title - menu */}
      <div className="flex-center-between">
        <h1 className="My-title">Từ điển</h1>
        <div>
          <WordSortModal
            onSelect={onSortTypeChange}
            classNameIcon="My-setting-icon mr-5"
          />
          {!isTOEIC && (
            <DDSettingWordPack
              onChoose={onSettingWordPack}
              classNameIcon="My-setting-icon"
            />
          )}
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
                      Không tìm thấy từ nào trong từ điển
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

MyDictionary.propTypes = {
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

MyDictionary.defaultProps = {
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

export default MyDictionary;
