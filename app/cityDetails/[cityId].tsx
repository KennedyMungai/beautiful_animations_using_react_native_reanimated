import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { Cities } from '~/assets/cities';

const CityDetails = () => {
  const { cityId } = useLocalSearchParams();

  const cityDetails = Cities.find((city) => city.id === Number(cityId));

  return (
    <SafeAreaView className="bg-white flex-1">
      <Image source={{ uri: cityDetails?.image }} className="w-full h-[400]" />
      <ScrollView showsVerticalScrollIndicator={false} className="px-2 pt-3">
        <Text className="font-bold text-3xl text-neutral-700 my-1">{cityDetails?.name}</Text>
        <Text className="font-semibold text-base px-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nobis accusamus deserunt.
          Dignissimos, consequatur dolore aut asperiores natus, mollitia, eveniet nesciunt totam
          obcaecati dolorum ipsa! Rerum labore a dolore fuga adipisci error nisi, illo repudiandae
          enim ad sequi, id quia inventore eaque sed ea consequatur vero repellat accusamus eos
          magnam molestiae architecto. Cumque, iste? Recusandae natus sequi nam numquam dolor.
          Excepturi veritatis hic laudantium maxime architecto praesentium iste recusandae facere?
          Eos voluptatem consectetur illo dolores! Laudantium perferendis nisi ratione. Saepe,
          recusandae? Assumenda fugit quas asperiores iste reprehenderit accusamus vitae unde
          doloremque harum autem, dolorem quibusdam corporis quis magni quia ut dolor reiciendis
          distinctio. Aperiam veritatis eos praesentium nesciunt ea provident dolorum error rerum
          tenetur molestias totam nostrum esse quod, culpa voluptates repellat quis iure nobis
          doloremque. Sit enim quis maxime vitae? Saepe sunt in deserunt consectetur natus
          laboriosam reprehenderit cumque maxime non, a corporis aperiam, ut rerum dolores ad iure
          modi fuga dicta eligendi? Neque reprehenderit sint, placeat odit error consequuntur dolore
          quos! Reprehenderit ipsa iusto voluptate obcaecati tempore quam at, omnis odit voluptatem
          totam tempora debitis in aliquid dolorem perferendis cumque? Corrupti aliquam corporis ad
          at consequatur. Perferendis omnis unde optio explicabo modi repellendus excepturi aliquid,
          earum labore! Placeat ut cupiditate iusto amet rem nam eius quaerat error harum itaque
          nostrum fuga dolores odio molestiae omnis quia, quibusdam iste fugiat repellendus quis
          officiis! Sunt animi, minus officia iure dolorum dolore, eaque odit quisquam facilis ex id
          obcaecati cum veritatis doloribus tempore nam voluptate sequi possimus mollitia!
          Reprehenderit inventore error perspiciatis, fugiat, vel tenetur nulla veniam optio est
          dolores cupiditate corrupti quae impedit quisquam! Dolorem dolor, tempore corporis,
          doloribus sapiente, a odit nesciunt fugit iure voluptatum repellendus quis nihil quae
          laborum numquam facere vero aperiam accusantium cum aliquam reiciendis quasi? Magni,
          praesentium. Voluptatem unde eaque quaerat est praesentium at placeat cumque! Architecto
          rerum vel distinctio consequatur qui provident! Perspiciatis officiis assumenda, incidunt
          minus fugiat rerum pariatur consequuntur suscipit laboriosam quae placeat repellendus,
          eligendi maiores sint libero, odio illum voluptatum sequi error odit explicabo
          accusantium. Culpa quaerat esse accusamus repellendus totam quidem blanditiis harum
          voluptates laboriosam. Impedit dicta fuga numquam similique non labore, nobis natus velit
          est sit molestias ad facilis eius sed aliquam animi possimus suscipit beatae, commodi
          voluptas porro, minima et. Libero iure, beatae laboriosam voluptatem iusto dignissimos
          similique, labore minima aperiam aliquid qui distinctio tempore quidem blanditiis illum
          accusantium eius, natus facere reprehenderit porro! Impedit voluptate architecto enim,
          laboriosam repellat, culpa vitae maiores neque expedita consequuntur asperiores ab vero
          est repellendus cupiditate magnam omnis a quibusdam optio cum unde veniam. Adipisci ullam
          ipsum culpa voluptatem vitae voluptatum maxime sequi iste cupiditate obcaecati magni
          corrupti optio ex quibusdam vero, recusandae nesciunt quo dolore? Minima, totam quae.
          Consequuntur corporis hic modi voluptatibus voluptate ratione sapiente perferendis quae!
          Adipisci, nihil, impedit ratione sequi laudantium officiis sunt fugit voluptate sapiente
          ex, eaque ullam praesentium assumenda dolorum! Obcaecati magnam itaque doloribus labore
          quam officiis amet, maxime enim aliquid accusantium. Magnam reprehenderit molestiae
          assumenda ex fugit sit cumque qui. Necessitatibus molestias eum ratione consectetur alias
          quis minus a nam ab iste assumenda non, eos tempore in, consequatur possimus vitae!
          Distinctio, vel commodi. Laudantium rerum libero sunt iste ipsam sit voluptatem sequi
          eligendi tempora! Quibusdam accusamus accusantium a enim repudiandae ipsam, aliquam minus
          sequi in! Non voluptatem obcaecati perferendis nisi veritatis earum in repellendus
          exercitationem culpa excepturi repellat alias cum dolores itaque debitis corrupti nemo
          eligendi accusamus delectus laudantium recusandae mollitia suscipit, quibusdam atque!
          Magnam, commodi asperiores. Aperiam tempore atque consectetur nobis cum labore quas
          pariatur, repellat sed accusantium alias! Perferendis exercitationem fugiat facere iste,
          quo deserunt natus. Dolorem similique nostrum officia repellendus id deleniti sapiente, a
          tenetur quas laborum. Error, tenetur fuga. Exercitationem velit aperiam asperiores
          architecto iusto molestias impedit hic temporibus, debitis praesentium odit fugit quia
          maxime quis illum, atque error repellendus? Incidunt, sequi iusto ducimus ad magnam
          assumenda fugit autem minima, nobis fugiat placeat neque odit sapiente. Exercitationem
          eaque illum consequatur ea, deserunt, hic nulla possimus laborum perferendis molestiae
          rerum illo harum placeat et praesentium? Fuga quidem velit facere accusamus quod id, quam
          excepturi repellendus fugiat doloribus consequuntur necessitatibus ducimus, harum,
          assumenda fugit accusantium itaque a laboriosam. Veniam in quisquam assumenda debitis
          molestias quam accusamus aperiam, beatae ut facere sunt, eos vero? Quia numquam sint earum
          distinctio nobis ut error, libero sed quo, officia corrupti illo quae voluptate eius,
          asperiores nemo facilis rem similique excepturi? Enim alias vitae deleniti asperiores eius
          animi quidem beatae distinctio corrupti nobis soluta autem odit, officiis ratione nulla ab
          eos, ea quo? Itaque explicabo, voluptas aut blanditiis expedita similique quod. A
          accusantium suscipit deleniti qui, quos hic eaque optio expedita odit atque vero ullam rem
          consequuntur incidunt quia porro aspernatur odio cumque, ex enim perferendis culpa
          similique deserunt. Quae reprehenderit fuga repellat eius accusamus voluptas aliquid
          dolor, iste sint veniam, natus id molestiae, animi porro iure illo ab fugiat explicabo aut
          odio? Ad tempore laudantium, quam non ipsa iste eos veniam odit officiis dolores possimus
          nesciunt ipsam est sit officia quis eveniet nulla voluptate vitae beatae? Eaque deserunt
          ipsam laudantium! Quaerat, quibusdam odio? Porro pariatur quisquam voluptates est aliquid
          quas! Optio officiis est unde commodi, perspiciatis eos quisquam obcaecati vero hic
          debitis quaerat rerum ipsa dolorem quibusdam reiciendis aspernatur omnis. Rerum, at enim
          debitis non quam perspiciatis voluptatem molestiae aliquam eos fugit, repudiandae dolore
          quos ea rem, porro cupiditate impedit neque asperiores tempora animi ex! Aut voluptas
          laudantium, nisi qui doloremque quia corporis neque corrupti. Accusantium provident, est
          nihil aspernatur voluptates repellat debitis adipisci praesentium iusto ullam nesciunt
          illo natus perspiciatis id asperiores. Incidunt, non eveniet? Temporibus ullam tempore
          ratione vitae iusto, nemo minus eos eaque ab nihil, aliquid, dolores maiores ipsam facere!
          Accusamus voluptate recusandae dolorum quod autem unde quaerat, animi qui deserunt velit
          minima. Non excepturi quidem nobis ipsum sunt, quasi asperiores earum officia deleniti id
          hic, exercitationem architecto sit. Sed repellat, quasi accusantium exercitationem,
          praesentium distinctio saepe amet consequuntur, quia veritatis quidem. Fuga tempora
          inventore mollitia nemo saepe rerum beatae quos praesentium, fugit suscipit possimus,
          deleniti quibusdam nam, eaque impedit illum amet ullam quae.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CityDetails;
