import { useEffect, useState } from 'react'
import yelp from "../api/yelp"

export default () => {
	const [results, setResults] = useState([])
	const [errorMessage, setErrorMessage] = useState('')

	const searchApi = async (searchTerm) => {
		try{
			const response = await yelp.get('/search', {
				params: {
					limit: 50, 
					term: searchTerm,
					location: 'san jose'
				}
			})
			setResults(response.data.businesses)
		} catch (err){
			console.log(err)
			setErrorMessage('Something went wrong')
		}
		
	}
	//this uses the useEffect hook to run the default search only one time. it searches for pasta. The reason it only searches one time is the empty array in the parameter after the function. 
	useEffect(() => {
		searchApi('pasta')
	}, [])

	return [searchApi, results, errorMessage]
}