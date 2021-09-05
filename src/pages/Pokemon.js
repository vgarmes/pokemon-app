import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchUrl } from '../hooks/useFetchPokemons';
import {
  SimpleGrid,
  Image,
  Box,
  Flex,
  Heading,
  Stack,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
  Tag,
} from '@chakra-ui/react';
import { pokeApiBase } from '../utils/constants';
import { Error } from '../components';

const Pokemon = () => {
  let { pokemonId } = useParams();
  const { data, error } = useFetchUrl(`${pokeApiBase}/pokemon/${pokemonId}`);

  if (error) return <Error />;
  if (!data) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="50vh">
        Loading...
      </Flex>
    );
  }

  return (
    <>
      <Header
        name={data.name}
        types={data.types.map(({ type }) => type.name)}
      />
      <SimpleGrid columns={[1, 2]} spacing={4} mb="4">
        <Image
          src={data.sprites.other['official-artwork']['front_default']}
          alt={`${data.name} sprite`}
        />
        <Box>
          <Stats data={data} />
          <Abilities
            abilities={data.abilities.map(({ ability }) => ability.name)}
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

const Header = ({ name, types }) => {
  return (
    <Flex
      minHeight="15vh"
      position="relative"
      flexDirection={['column', 'row']}
      py={[2, 6]}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Heading
        display="inline"
        fontSize={['3xl', '5xl']}
        px="6"
        py="2"
        borderRadius="lg"
        textTransform="capitalize"
        alignSelf={['flex-start']}
      >
        {name}
      </Heading>
      <Stack isInline spacing="3">
        {types.map((type, index) => (
          <Badge key={index} variantColor="purple" fontSize={['sm', 'md']}>
            {type}
          </Badge>
        ))}
      </Stack>
    </Flex>
  );
};

const StatsTitle = ({ title }) => {
  return <Text fontWeight="bold">{title}</Text>;
};

const Stats = ({ data }) => {
  return (
    <Box borderWidth="1px" p="4" borderRadius="md" mt="4">
      <StatsTitle title="Attributes" />
      <SimpleGrid columns="2" mt="2">
        <Stat>
          <StatLabel display="flex">Height</StatLabel>
          <StatNumber fontSize={['md', 'xl']}>{data.height * 10}</StatNumber>
          <StatHelpText>CM</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel display="flex">Weight</StatLabel>
          <StatNumber fontSize={['md', 'xl']}>
            {Math.floor(data.weight / 10)}
          </StatNumber>
          <StatHelpText>KG</StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

const Abilities = ({ abilities }) => {
  return (
    <Box borderWidth="1px" p="4" borderRadius="md" mt="4">
      <StatsTitle title="Moves" />
      <Box
        d="flex"
        mt={1}
        letterSpacing="wide"
        textTransform="uppercase"
        flexWrap="wrap"
      >
        {abilities.map((ability, index) => (
          <Tag
            key={index}
            size="sm"
            mr={2}
            colorScheme="cyan"
            variant="subtle"
            mt={1}
          >
            {ability}
          </Tag>
        ))}
      </Box>
    </Box>
  );
};

export default Pokemon;
