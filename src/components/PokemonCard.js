import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Image,
  Badge,
  Tag,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { useFetchUrl } from '../hooks/useFetchPokemons';

const PokemonCard = ({ name, url }) => {
  const dummy_id = 1;
  const { data, error } = useFetchUrl(url);

  // pokemons with id > 10000 are just variants missing some information

  return (
    <>
      {data && data.id < 10000 && (
        <Box
          as={Link}
          to={`/pokemons/${dummy_id.toString()}`}
          boxShadow="md"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          position="relative"
        >
          <Image
            src={data.sprites.other['official-artwork']['front_default']}
            alt={`${name} sprite`}
            height="300px"
            width="100%"
            objectFit="cover"
            objectPosition="center"
          />
          <Badge position="absolute" top="3" right="3" fontSize="lg">
            #{data.id}
          </Badge>
          <Box p="6">
            <Box
              fontWeight="bold"
              as="h4"
              lineHeight="tight"
              textTransform="capitalize"
              fontSize="xl"
              isTruncated
            >
              {name}
            </Box>

            <StatGroup mt={1}>
              <Stat textTransform="uppercase" letterSpacing="wide">
                <StatLabel fontSize="xs" color="gray.500">
                  Height
                </StatLabel>
                <StatNumber fontSize="md" fontWeight="semibold">
                  {data.height * 10} cm
                </StatNumber>
              </Stat>
              <Stat textTransform="uppercase" letterSpacing="wide">
                <StatLabel fontSize="xs" color="gray.500">
                  Weight
                </StatLabel>
                <StatNumber fontSize="md" fontWeight="semibold">
                  {Math.floor(data.weight / 10)} kg
                </StatNumber>
              </Stat>
            </StatGroup>

            <Box
              d="flex"
              mt={1}
              letterSpacing="wide"
              textTransform="uppercase"
              flexWrap="wrap"
            >
              {data.abilities.map(({ ability }, index) => (
                <Tag
                  key={index}
                  size="sm"
                  mr={2}
                  colorScheme="cyan"
                  variant="subtle"
                  mt={1}
                >
                  {ability.name}
                </Tag>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PokemonCard;
