import React, { useEffect } from "react";
import KampCard from "../KampCard/KampCard";
import { fetchKamps } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectKamps,
  selectLoadedItems,
} from "../../redux/selectors";
import css from "./KampList.module.css";
import { incrementLoadedItems, setPage } from "../../redux/kampsSlice";

export default function KampsList() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const kamps = useSelector(selectKamps);
  const loadedItems = useSelector(selectLoadedItems);

  useEffect(() => {
    dispatch(fetchKamps(currentPage));
  }, [currentPage, dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementLoadedItems(4));
    dispatch(setPage(currentPage + 1));
  };

  console.log("loadedItems", loadedItems);
  return (
    <div className={css.kampListWrapper}>
      <ul>
        {kamps.slice(0, loadedItems).map((kamps) => (
          <li key={kamps._id}>
            <KampCard kamps={kamps} />
          </li>
        ))}
      </ul>

      <button className={css.btnLoadMore} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
}
