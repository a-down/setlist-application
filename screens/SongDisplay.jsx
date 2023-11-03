import { View, Text, Pressable, useWindowDimensions } from 'react-native';
import song from '../utils/ComeOnGetHigher';

export default function SongDisplay({ navigation }) {
  const { width } = useWindowDimensions();

  // const song = {
  //   title: 'Come On Get Higher',
  //   artist: 'Matt Nathanson',
  //   key: 'F',
  //   capo: {
  //     capoPreferred: true,
  //     capoKey: 'C',
  //     capoPosition: 7
  //   },
  //   creator: 'a-down',
  //   songData: [
  //     {
  //       sectionTitle: 'Chorus',
  //       sectionLines: [
  //         [
  //           {
  //             content: 'Well you only need the',
  //             type: 'lyrics'
  //           },
  //           {
  //             content: 'F',
  //             type: 'chord'
  //           },
  //           {
  //             content: "light when it's burning low",
  //             type: 'lyrics'
  //           },
  //         ],
  //         [
  //           {
  //             content: 'Well you only need the',
  //             type: 'lyrics'
  //           },
  //           {
  //             content: 'F',
  //             type: 'chord'
  //           },
  //           {
  //             content: "light when it's burning",
  //             type: 'lyrics'
  //           },
  //           {
  //             content: 'F',
  //             type: 'chord'
  //           },
  //           {
  //             content: "low",
  //             type: 'lyrics'
  //           },
  //         ],
  //         [
  //           {
  //             content: 'Well you only need the',
  //             type: 'lyrics'
  //           },
  //           {
  //             content: 'F',
  //             type: 'chord'
  //           },
  //           {
  //             content: "light when it's burning low",
  //             type: 'lyrics'
  //           },
  //         ],
  //       ]
  //     },
  //   ]
  // }

  console.log(song.songData)

  function SongLineChord({ chord }) {
    
    return <Text className="text-brand-yellow bg-brand-navy py-px px-1">{chord}</Text>
  }

  function SongLineWord({ word }) {
    return <Text className="text-brand-navy">{word}</Text>
  }

  function SongLine({ line }) {
    line.map((element) => {
      if (element.type === 'chord') {
        return <SongLineChord chord={element.content} />
      } else {
        element.content.split(' ').forEach((word) => {
          return <SongLineWord word={word} />
        })
      }
    })
  }

  function SongSection({ section }) {
    console.log('section:', section)
    return (
      <View className="flex-wrap">
        {section.sectionLines.map((line) => (
          <SongLine line={line} className="flex-row justify-start"/>
        ))}
      </View>
    )
  }

  return (
    <View className="flex-1 bg-brand-navy">
      <View className="flex-1 bg-gray-background mt-12 rounded-t-[20px]">
        <View className="p-4">

          <Pressable onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </Pressable>

          <Text className="text-2xl font-medium text-brand-navy mt-4">Come On Get Higher</Text>
          <Text className=" text-lg text-brand-navy font-medium opacity-80 mt-2">Matt Nathanson</Text>
          <View className="flex-row" style={{gap: 16}}>
            <Text className=" text-lg text-brand-navy font-semibold opacity-80 mt-3 pt-1">
              Key:{' '}
              <Text className="font-bold">C</Text>
            </Text>

            <Text className=" text-lg text-brand-navy font-semibold opacity-80 mt-3 pt-1">
              Chords:{' '}
              <Text className="font-bold">C Em F G Am</Text>
            </Text>
          </View>

          <View className="flex-row w-full mt-4" style={{gap: 16}}>
            <Pressable className="bg-brand-navy rounded-xl flex-1 justify-center">
              <Text className="text-lg font-semibold text-brand-yellow text-center pt-5 pb-3">Capo (7)</Text>
            </Pressable>
            <Pressable className="bg-transparent rounded-xl flex-1">
              <Text className="text-lg font-semibold text-brand-navy opacity-60 text-center pt-5 pb-3">No Capo</Text>
            </Pressable>
          </View>
        </View>

        
        <View className="w-full h-full flex-1 bg-white rounded-t-[10px] p-4">
          <View className="flex-row justify-between">
            <Text className="text-brand-navy text-2xl">{'<'}</Text>
            <Text className="text-brand-navy text-lg font-medium mt-1">Chorus</Text>
            <Text className="text-brand-navy text-2xl">{'>'}</Text>
          </View>

          <View className="w-full h-full mt-0">
            {/* {song.songData.map((section) => (
              <SongSection section={section} className=""/>
            ))} */}



            {song.songData.map((section) => (
              <>
                {section.sectionLines.map((line) => (
                  <View>
                    <View className="relative">
                      <View className="">
                        <Text style={{lineHeight: 40}} className="font-bold text-brand-navy">{line[0]}</Text>
                      </View>
                      <Text style={{lineHeight: 40}} className="text-brand-navy absolute top-5">{line[1]}</Text>
                    </View>
                  </View>
                ))}
              </>
            ))}



            {/* {song.songData.map((section) => (
              <>
                {section.sectionLines.map((line) => (
                  <View className="flex-row flex-wrap">
                    {line.map((element) => (
                      <>
                        {element.type === 'chord' ? (
                          <View className="relative">
                            <View className="bg-gray-background rounded-sm absolute -top-1.5">
                              <Text className="font-bold text-brand-navy py-px px-1">{element.content}</Text>
                            </View>
                          </View>
                        ) : (
                          <>
                            {element.content.split(' ').map((word) => (
                              <>
                                {console.log(word)}
                                <Text style={{lineHeight: 48}} className="text-brand-navy">{word + " "}</Text>
                              </>
                            ))}
                          </>
                        )}
                      </>
                    ))}
                  </View>
                ))}
              </>
            ))} */}

          </View>

        </View>
      </View>

    </View>
  )
}