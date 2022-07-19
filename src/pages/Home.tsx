import Logo from '../assets/logo_secondary.svg'
import { useState } from 'react';
import { HStack, VStack, IconButton, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import { ChatTeardropText } from 'phosphor-react-native'

import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Order, OrderProps } from '../components/Order';

export function Home() {
    
    const { colors } = useTheme();
    const [stausSelected, setStausSelected] = useState<'open' | 'closed'>('open')
    const [orders, setOrders] = useState<OrderProps[]>([
        {
            id: '123',
            patrimony: '01',
            when: '18/07/2022 as 10:00',
            status: 'open'
        },
        {
            id: '321',
            patrimony: '02',
            when: '18/07/2022 as 10:00',
            status: 'closed'
        },
        {
            id: '213',
            patrimony: '03',
            when: '18/07/2022 as 10:00',
            status: 'open'
        }      
    ])

    return (
    <VStack flex={1} pb={6} bg='gray.700'>

        <HStack

        w='full'
        justifyContent='space-berween'
        alignItems='center'
        bg='gray.600'
        pt={12} pb={5} px={6}>

        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />}/>

        </HStack>


        <VStack flex={1} px={6}>
            <HStack w='full' mt={8} mb={4} justifyContent='space-between' alignItems='center'>
            <Heading color='gray.100'>
                Meus chamados
            </Heading>
            <Text color='gray.200'>3</Text>
            </HStack>

            <HStack space={3} mb={8}>
                <Filter type="open" title='Em andamento' onPress={() => setStausSelected('open')} isActive={stausSelected === 'open'}/>
                <Filter type="closed" title='Finalizados' onPress={() => setStausSelected('closed')} isActive={stausSelected === 'closed'}/>
            </HStack>

            <FlatList
              data={orders}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 50}}
              renderItem={({item}) => <Order data={item}/>}
              ListEmptyComponent={() => (
                <Center>
                    <ChatTeardropText color={colors.gray[300]} size={40}/>
                    <Text color='gray.300' fontSize='xl' mt={6} textAlign='center'>
                        Você ainda não possui { '\n'}
                        solicitações {stausSelected === 'open' ? 'em andamento' : 'finalizadas'}
                    </Text>
                </Center>
              )}
              />

            <Button title='Nova solicitação' />
        </VStack>        
    </VStack>
  );
}