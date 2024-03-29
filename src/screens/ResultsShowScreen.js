import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import yelp from "../api/yelp"

const ResultsShowScreen = ({ route }) => {
	const id = route.params.id
	const [result, setResult] = useState(null)

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`)
		setResult(response.data)
	}
	useEffect(() => {
		getResult(id)
	}, [])

	//this is so we don't reference a null object in the image sources
	if (!result) {
		return null
	}

	return <View>
		<Text>{result.name}</Text>
		<FlatList
			data={result.photos}
			keyExtractor={(photo) => photo}
			renderItem={({ item }) => {
				return <Image style={styles.image} source={{ uri: item}} />
			}}
		/>
	</View>
}

const styles = StyleSheet.create({
	image: {
		width: 300, 
		height: 200,
		marginBottom: 10
	}
})

export default ResultsShowScreen