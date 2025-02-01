import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { router, useLocalSearchParams } from 'expo-router'
import icons from '@/constants/icons'
import Search from '@/components/Search'
import { FeaturedCard, Card } from '@/components/Cards'
import Filters from '@/components/Filters'
import NoResults from '@/components/NoResult'
import {useGlobalContext} from "@/lib/global-provider";
import seed from "@/lib/ceed";

const handleCardPress = (id: string) => router.push(`/properties/${id}`)
export default function Index() {
  const {user} = useGlobalContext();

  return (
    <SafeAreaView className='bg-white h-full'>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        // ListEmptyComponent={
        //   loading ? (
        //       <ActivityIndicator size="large" className="text-primary-300 mt-5" />
        //   ) : (
        //       <NoResults />
        //   )
        // }
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName='pb-32'
        columnWrapperClassName='flex gap-5 px-5'
        ListHeaderComponent={
          <View className='px-5'>
            <View className='flex flex-row items-center justify-between mt-5'>
              <View className='flex flex-row items-center'>
                <Image
                  source={{uri: user?.avatar}}
                  className='size-12 rounded-full'
                />
                <View className='flex flex-col items-start ml-2 justify-center'>
                  <Text className='text-xs font-rubik text-black-100'>
                    Good Morning
                  </Text>
                  <Text className='text-base font-rubik-medium text-black-300'>
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className='size-6' />
            </View>
            <Search />
            <View className='my-5'>
              <View className='flex flex-row items-center justify-between'>
                <Text
                  className='text-xl font-rubik-bold
          text-black-300
          '
                >
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text
                    className='text-base font-rubik-bold
            text-primary-300
            '
                  >
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                  data={[5,6,7]}
                  renderItem={({ item }) => (
                      <FeaturedCard
                          item={item}
                          onPress={() => handleCardPress(item.$id)}
                      />
                  )}
                  keyExtractor={(item) => item.toString()}
                  horizontal
                  bounces={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="flex gap-5 mt-5"
              />
              )}
            </View>
            <View className='flex flex-row items-center justify-between'>
              <Text
                className='text-xl font-rubik-bold
          text-black-300
          '
              >
                Our Recommendation
              </Text>
              <TouchableOpacity>
                <Text
                  className='text-base font-rubik-bold
            text-primary-300
            '
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  )
}
