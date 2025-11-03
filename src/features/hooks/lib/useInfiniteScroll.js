import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useInfiniteScroll(initialUrl) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);

	const fetchData = useCallback(async (pageNum) => {
		if (!hasMore && pageNum > 1) return;
		
		setLoading(true);
		setError(null);
		
		try {
			const response = await axios.get(`${initialUrl}?page=${pageNum}`);
			const newData = response.data.results;
			
			setHasMore(!!response.data.info?.next);
			
			setData(prevData => pageNum === 1 ? newData : [...prevData, ...newData]);
		} catch (err) {
			console.error(err);
			setError(err);
		} finally {
			setLoading(false);
		}
	}, [initialUrl, hasMore]);

	useEffect(() => {
		fetchData(page);
	}, [page, fetchData]);

	const loadMore = useCallback(() => {
		if (hasMore && !loading) {
			setPage(prevPage => prevPage + 1);
		}
	}, [hasMore, loading]);

	const reset = useCallback(() => {
		setData([]);
		setPage(1);
		setHasMore(true);
		setError(null);
	}, []);

	return { data, loading, error, hasMore, loadMore, reset };
}