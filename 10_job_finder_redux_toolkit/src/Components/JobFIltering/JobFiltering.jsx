import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  highSortJob,
  lowSortJob,
  searchJob,
} from "../../Features/Jobs/JobSlice.js";
import { fetchJobs } from "./../../Features/Jobs/JobSlice";
const JobFiltering = () => {
  // =================================================================
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const [sortJob, setSortJob] = useState("");

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    dispatch(searchJob(searchTerm));
  };

  const handleSortJob = (e) => {
    const searchTerm = e.target.value;

    console.log(searchTerm);

    setSortJob(searchTerm);

    if (searchTerm === "high") {
      dispatch(highSortJob());
    } else if (searchTerm === "low") {
      dispatch(lowSortJob());
    } else if (searchTerm === "default") {
      dispatch(fetchJobs());
    }
  };
  // =================================================================
  return (
    <>
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
              onChange={handleChange}
              value={search}
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            // autocomplete="sort"
            className="flex-1"
            onChange={handleSortJob}
            value={sortJob}
          >
            <option value="default">Default</option>
            <option value="high">Salary (High to Low)</option>
            <option value="low">Salary (Low to High)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default JobFiltering;
