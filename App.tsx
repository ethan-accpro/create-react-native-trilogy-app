import React from 'react';
import {observer} from 'mobx-react';
import {
  Button,
  ButtonVariant,
  Card,
  CardContent,
  CardImage,
  Column,
  Columns,
  Icon,
  IconName,
  IconSize,
  Pagination,
  RadioTile,
  RadioTiles,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Title,
  View,
} from '@trilogy-ds/react';
import {SafeAreaView} from 'react-native';
import {
  defaultTheme,
  TrilogyThemeProvider as TrilogyThemeProviderBase,
} from '@trilogy-ds/react/lib/context/providerTheme';
import {SVGicons} from '@trilogy-ds/assets/lib/iconsPath';
import AutoComplete from '@trilogy-ds/react/lib/components/autocomplete/AutoComplete.native';

// Configuration du provider
const TrilogyThemeProvider = TrilogyThemeProviderBase as React.FC<{
  theme: typeof defaultTheme;
  children: React.ReactNode;
}>;

const theme = {
  ...defaultTheme,
  icons: SVGicons, // On utilise directement SVGicons sans normalisation
};

const App = observer(() => {
  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  return (
    <TrilogyThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{width: 250, height: 200}}>
          <Text>Test des icônes</Text>

          <Card>
            <CardImage src="https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png" />
            <CardContent>
              <Title level={4}> Présentation </Title>
              <Title level={5}> Title lorem </Title>
              <Text level={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}> Voir plus... </Button>
            </CardContent>
          </Card>

          {/* 1. Test avec Icon seul (devrait fonctionner) */}
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Icon name={IconName.SEARCH} size={IconSize.MEDIUM} />
            <Icon name="alert" size={IconSize.MEDIUM} style={{marginLeft: 10}} />
            <Icon name="tri-alert" size={IconSize.MEDIUM} style={{marginLeft: 10}} />
          </View>

          {/* 2. Solution alternative pour RadioTile */}
          <RadioTiles align="ALIGNED_CENTER">
            {/* Option 1: Utiliser un Icon intégré */}
            <RadioTile
              description="Avec Icon intégré"
              horizontal
              id="tile-1"
              label="Option 1"
              name="radio-group-1"
              value="value-1"
              icon={IconName.ARROW_LEFT}
            />

          </RadioTiles>
          <Columns align="ALIGNED_CENTER">
            <Column narrow>
              <Pagination defaultPage={2} length={150} />
            </Column>
          </Columns>
          <Tabs>
            <TabList>
              <Tab iconName={IconName.EXCLAMATION_CIRCLE} label="Tab 1" />
              <Tab iconName="tri-check" label="Tab 2" />
              <Tab iconName="tri-eye" label="Tab 3" />
            </TabList>
            <TabPanels>
              <TabPanel>
                <Title> Hello ! </Title>
              </TabPanel>
              <TabPanel>
                <Title> Bye ! </Title>
              </TabPanel>
              <TabPanel>
                <Title> Nice to meet you ! </Title>
              </TabPanel>
            </TabPanels>
          </Tabs>

        </View>
      </SafeAreaView>
    </TrilogyThemeProvider>
  );
});

export default App;
