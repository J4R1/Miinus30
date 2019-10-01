/* eslint-disable react/display-name */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Button,
} from 'react-native';

const useSwapiPeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(
      () => {
        setLoading(true);
        fetch(`https://swapi.co/api/people?page=${page}`)
            .then((res) => res.json())
            .then((res) => {
              setPeople([...people, ...res.results]);
              setLoading(false);
            });
      },
      [page]
  );

  const loadMore = () => {
    setPage(page + 1);
  };

  return {
    people,
    loading,
    loadMore,
  };
};

export default () => {
  const {people, loading, loadMore} = useSwapiPeople();

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={people}
        keyExtractor={(item) => item.url}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator />
          ) : (
            <Button title="Load More" onPress={loadMore} />
          )
        }
      />
    </SafeAreaView>
  );
};
