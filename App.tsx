import React from 'react';
import {observer} from 'mobx-react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Alert,
    Box,
    BoxContent,
    BoxFooter,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonList,
    Card,
    CardContent,
    CardImage,
    Checkbox,
    Chips,
    Column,
    Columns,
    Countdown,
    Divider,
    IconName,
    Link,
    Otp,
    Pagination,
    Price,
    Progress,
    Radio,
    RadioList,
    RadioTile,
    RadioTiles,
    Range,
    Row,
    Rows,
    ScrollView,
    Section,
    SegmentControl,
    SegmentControlItem,
    Spacer,
    SpacerSize,
    Step,
    Stepper,
    Sticker,
    Switch,
    Tab,
    Table,
    TableBody,
    TableHead,
    TableTd,
    TableTh,
    TableTr,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tag,
    TagList,
    Text,
    Textarea,
    Timeline,
    TimelineContent,
    TimelineItem,
    TimelineMarker,
    Title,
} from '@trilogy-ds/react';

import {
    defaultTheme,
    TrilogyThemeProvider as TrilogyThemeProviderBase,
} from '@trilogy-ds/react/lib/context/providerTheme';
import {SVGicons} from '@trilogy-ds/assets/lib/iconsPath';
import {SafeAreaView} from "react-native";

const TrilogyThemeProvider = TrilogyThemeProviderBase as React.FC<{
  theme: typeof defaultTheme;
  children: React.ReactNode;
}>;

const theme = {
  ...defaultTheme,
  icons: SVGicons,
};

const App = observer(() => {
  return (
    <TrilogyThemeProvider theme={theme}>
        <SafeAreaView>
            <ScrollView>
                <Section>
                    <Title level={1}>Welcome onboard !</Title>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>This template uses components from the Trilogy library by Bouygues Telecom.</Text>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>You will also find MobX as the store manager.</Text>
                    <Spacer size={SpacerSize.THREE}/>
                    <Link href={"https://design.bouyguestelecom.fr/getting-started"}>Trilogy documentation juste here</Link>
                    <Divider/>
                    <Title level={2}>Some components</Title>
                    <Spacer size={SpacerSize.FIVE}/>
                    <Text>Alerts</Text>
                    <Spacer size={SpacerSize.THREE}/>
                    <Alert description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.." display status="INFO"
                           title="Alert information" />
                    <Spacer size={SpacerSize.TWO}/>
                    <Alert description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.." display status="ERROR"
                           title="Alert error" />
                    <Spacer size={SpacerSize.TWO}/>
                    <Alert description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.." display status="SUCCESS"
                           title="Alert success" />
                    <Spacer size={SpacerSize.TWO}/>
                    <Alert description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.." display status="WARNING"
                           title="Alert warning" />
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Accordion</Text>
                    <Divider/>
                    <Accordion id="accordion-1">
                        <AccordionItem id="ONE" open>
                            <AccordionHeader>
                                <Text> Hello World 1 </Text>
                            </AccordionHeader>
                            <AccordionBody data-id="totooooo-test-id">
                                <Text> Lorem ipsum dolor sit amet lorem </Text>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem id="TWO" open>
                            <AccordionHeader>
                                <Text> Hello World 2 </Text>
                            </AccordionHeader>
                            <AccordionBody>
                                <Text> Lorem ipsum dolor sit amet </Text>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem id="THREE">
                            <AccordionHeader>
                                <Text> Hello World 2 </Text>
                            </AccordionHeader>
                            <AccordionBody>
                                <Text> Collpased by default </Text>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem disabled id="FOUR">
                            <AccordionHeader>
                                <Text> Hello World 3 </Text>
                            </AccordionHeader>
                            <AccordionBody>
                                <Text> Lorem ipsum dolor sit amet </Text>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Box</Text>
                    <Divider/>
                    <Box>
                        <BoxContent>
                            <Title level={1}> Box Title </Title>
                            <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. </Text>
                        </BoxContent>
                        <BoxFooter>
                            <Link> Link </Link>
                        </BoxFooter>
                    </Box>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Box</Text>
                    <Divider/>
                    <ButtonList>
                        <Button variant="CONVERSION"> Button </Button>
                        <Spacer size={SpacerSize.TWO}/>
                        <Button variant="PRIMARY"> Button </Button>
                        <Spacer size={SpacerSize.TWO}/>
                        <Button variant="SECONDARY"> Button </Button>
                        <Spacer size={SpacerSize.TWO}/>
                        <Button disabled variant="PRIMARY"> Button </Button>
                        <Spacer size={SpacerSize.TWO}/>
                        <Button loading variant="PRIMARY"> Button </Button>
                    </ButtonList>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Titles</Text>
                    <Divider/>
                    <Title level={1}>Titre de niveau 1</Title>
                    <Title subtitle>Ceci est un sous-titre</Title>
                    <Title level={2}>Titre de niveau 2</Title>
                    <Title level={3}>Titre de niveau 3</Title>
                    <Title level={4}>Titre de niveau 4</Title>
                    <Title level={5}>Titre de niveau 5</Title>
                    <Title level={6}>Titre de niveau 6</Title>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Timeline</Text>
                    <Divider/>
                    <Timeline>
                        <TimelineItem>
                            <TimelineMarker iconName="tri-bell" />
                            <TimelineContent content="Modification de votre identifiant de connexion" heading="20 Septembre"
                                             linkLabel="Voir l'email" linkTo="link" />
                        </TimelineItem>
                        <TimelineItem active>
                            <TimelineMarker iconName="tri-bell" />
                            <TimelineContent content="SMS Bon voyage avec seuil usage inclus" heading="08 Juillet" linkLabel="Voir le SMS"
                                             linkTo="link" />
                        </TimelineItem>
                        <TimelineItem done>
                            <TimelineMarker iconName="tri-bell" />
                            <TimelineContent content="Passage en boutique concernant un accessoire" heading="06 Juillet" />
                        </TimelineItem>
                        <TimelineItem done>
                            <TimelineMarker iconName="tri-bell" />
                            <TimelineContent content="Modification de votre adresse de facturation" heading="05 Mai" />
                        </TimelineItem>
                    </Timeline>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Textarea</Text>
                    <Divider/>
                    <Textarea label="Label dynamique" maxLength={150} placeholder="placeholder" />
                    <Spacer size={SpacerSize.TWO}/>
                    <Textarea disabled label="Label dynamique" placeholder="placeholder" />
                    <Spacer size={SpacerSize.TWO}/>
                    <Textarea iconNameLeft="tri-alert" label="Label dynamique" placeholder="placeholder" />
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Text</Text>
                    <Divider/>
                    <Text accessibilityLabel="Ceci est un paragraphe" level={1} markup="p" typo="has-text-weight-semibold"> Ceci est mon paragraphe </Text>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Tags</Text>
                    <Divider/>
                    <TagList>
                        <Tag iconName={IconName.ALERT} label="Tag" variant="ERROR" />
                        <Spacer size={SpacerSize.THREE}/>
                        <Tag iconName={IconName.EXCLAMATION_CIRCLE} label="Tag success" variant="SUCCESS" />
                        <Spacer size={SpacerSize.THREE}/>
                        <Tag iconName={IconName.ARROW_RIGHT} label="Tag warning" variant="WARNING" />
                        <Spacer size={SpacerSize.THREE}/>
                        <Tag iconName={IconName.EYE_SLASH} label="Tag info" variant="INFO" />
                    </TagList>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Tabs</Text>
                    <Divider/>
                    <Tabs>
                        <TabList>
                            <Tab iconName={IconName.ARROW_LEFT} label="Tab 1" />
                            <Tab iconName={IconName.ALERT} label="Tab 2" />
                            <Tab iconName={IconName.ARROW_RIGHT} label="Tab 3" />
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
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Table</Text>
                    <Divider/>
                    <Table>
                        <TableHead>
                            <TableTr>
                                <TableTh> Title 1 </TableTh>
                                <TableTh> Title 2 </TableTh>
                                <TableTh> Title 3 </TableTh>
                            </TableTr>
                        </TableHead>
                        <TableBody>
                            <TableTr>
                                <TableTd> Donnée 1 </TableTd>
                                <TableTd> Donnée 2 </TableTd>
                                <TableTd> Donnée 3 </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd> Donnée 4 </TableTd>
                                <TableTd> Donnée 5 </TableTd>
                                <TableTd> Donnée 6 </TableTd>
                            </TableTr>
                        </TableBody>
                    </Table>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Switch</Text>
                    <Divider/>
                    <Columns>
                        <Column>
                            <Switch label="Switch one" name="switch one" />
                        </Column>
                        <Column>
                            <Switch checked label="Switch checked" name="switch checked" />
                        </Column>
                        <Column>
                            <Switch disabled label="Switch disabled" name="switch disabled" />
                        </Column>
                    </Columns>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Sticker</Text>
                    <Divider/>
                    <Columns>
                        <Column>
                            <Sticker label="Information" variant="MAIN" />
                            <Spacer size={SpacerSize.THREE}/>
                            <Sticker label="Information" small variant="MAIN" />
                        </Column>
                        <Column>
                            <Sticker label="Code Promo" variant="ACCENT" />
                            <Spacer size={SpacerSize.THREE}/>
                            <Sticker label="Code Promo" small variant="ACCENT" />
                        </Column>
                    </Columns>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Stepper</Text>
                    <Divider/>
                    <Stepper>
                        <Step done label="Récapitulatif" />
                        <Step done label="Compléments" />
                        <Step current label="Coordonnées" />
                        <Step label="Livraison" />
                        <Step label="Confirmation" />
                    </Stepper>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Segment Control</Text>
                    <Divider/>
                    <SegmentControl>
                        <SegmentControlItem active> Appels </SegmentControlItem>
                        <SegmentControlItem> SMS </SegmentControlItem>
                        <SegmentControlItem> Équipements </SegmentControlItem>
                        <SegmentControlItem disabled> Offres </SegmentControlItem>
                    </SegmentControl>
                    <Spacer size={SpacerSize.FOUR}/>
                    <Text>Section</Text>
                    <Divider/>
                    <Section backgroundColor="WHITE">
                        <Title level={1}> Première section </Title>
                    </Section>
                    <Section backgroundColor="NEUTRAL_FADE">
                        <Title level={1}> Seconde section </Title>
                    </Section>
                    <Section backgroundColor="WHITE">
                        <Title level={1}> Troisième section </Title>
                    </Section>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Rows</Text>
                    <Divider/>
                    <Columns>
                        <Column>
                            <Rows>
                                <Row><Text>1</Text></Row>
                                <Row><Text>2</Text></Row>
                                <Row><Text>3</Text></Row>
                            </Rows>
                        </Column>
                        <Column>
                            <Rows>
                                <Row><Text>4</Text></Row>
                                <Row><Text>5</Text></Row>
                                <Row><Text>6</Text></Row>
                            </Rows>
                        </Column>
                    </Columns>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Range</Text>
                    <Divider/>
                    <Range gap={0} id="range-id" label="Ceci est un label" max={100} min={0} name="range-name" unit="€" valueMax={50} valueMin={0} />
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Radio</Text>
                    <Divider/>
                    <RadioList verticalDesktop>
                        <Radio checked id="checkbox1" label="Label" name="name-1" value="value" />
                        <Radio id="checkbox2" label="Label" name="name-1" value="value" />
                        <Radio disabled id="checkbox3" label="Label" name="name-1" value="value" />
                        <Radio id="checkbox4" label="Label" name="name-1" readonly value="value" />
                    </RadioList>
                    <Spacer size={SpacerSize.THREE}/>
                    <RadioTiles>
                        <RadioTile className="is-fullheight" description="Je suis une description simple" id="tile-1" label="label" name="name-tile-1"
                                   value="value" />
                        <RadioTile description="Je suis une description simple" icon="tri-alert" id="tile-2" label="label" name="name-tile-1"
                                   value="value" />
                        <RadioTile description="Je suis une description simple" icon="tri-alert" id="tile-3" label="label" name="name-tile-1"
                                   value="value" />
                    </RadioTiles>
                    <Spacer size={SpacerSize.THREE}/>
                    <RadioTiles align="ALIGNED_CENTER">
                        <RadioTile description="Je suis une description simple" horizontal icon="tri-alert" id="tile-horizontal-1" label="label"
                                   name="name-tile-2" value="value" />
                        <RadioTile description="Je suis une description simple" horizontal icon="tri-alert" id="tile-horizontal-2" label="label"
                                   name="name-tile-2" value="value" />
                        <RadioTile description="Je suis une description simple" horizontal icon="tri-alert" id="tile-horizontal-3" label="label"
                                   name="name-tile-2" value="value" />
                    </RadioTiles>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Progress</Text>
                    <Divider/>
                    <Rows>
                        <Row>
                            <Progress legendCenter="My unique legend" status="INFO" value={30} />
                        </Row>
                        <Row>
                            <Progress legendEnd="5 Go" legendStart="0 Go" status="INFO" value={15} />
                        </Row>
                    </Rows>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Price</Text>
                    <Divider/>
                    <Price align="ALIGNED_START" amount={24.99} period="mois" />
                    <Price amount={24.99} mention="(1)" oldAmount={19.99} period="mois" />
                    <Price amount={24.99} mention="(1)" period="mois" />
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Pagination</Text>
                    <Divider/>
                    <Pagination defaultPage={2} length={5} />
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>OTP</Text>
                    <Divider/>
                    <Otp label="Saisir votre otp" />
                    <Otp disabled label="Saisir votre otp" />
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>CountDown</Text>
                    <Divider/>
                    <Countdown deadline={new Date("2025-12-24T17:00:00.000Z")} small />
                    <Spacer size={SpacerSize.THREE}/>
                    <Countdown deadline={new Date("2025-12-24T17:00:00.000Z")} />
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Chips</Text>
                    <Divider/>
                    <Chips active> Chips du panel de controls </Chips>
                    <Chips> Chips 2 </Chips>
                    <Chips active> Chips 3 </Chips>
                    <Chips> Chips 4 </Chips>
                    <Chips disabled> Chips disabled </Chips>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Checkbox</Text>
                    <Divider/>
                    <Checkbox checked id="checkbox1" label="Label" name="name-1" value="value" />
                    <Spacer size={SpacerSize.THREE}/>
                    <Checkbox id="checkbox2" label="Label" name="name-1" value="value" />
                    <Spacer size={SpacerSize.THREE}/>
                    <Checkbox disabled id="checkbox3" label="Label" name="name-1" value="value" />
                    <Spacer size={SpacerSize.THREE}/>
                    <Checkbox id="checkbox4" label="Label" name="name-1" readonly value="value" />
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Card</Text>
                    <Divider/>
                    <Card>
                        <CardImage src="https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png" />
                        <CardContent>
                            <Title level={4}>Présentation</Title>
                            <Spacer size={SpacerSize.TWO}/>
                            <Title level={5}>Title lorem</Title>
                            <Spacer size={SpacerSize.THREE}/>
                            <Text level={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.</Text>
                            <Spacer size={SpacerSize.THREE}/>
                            <Button variant="PRIMARY"> Voir plus... </Button>
                        </CardContent>
                    </Card>
                    <Spacer size={SpacerSize.THREE}/>
                    <Text>Breadcrumb</Text>
                    <Divider/>
                    <Breadcrumb>
                        <BreadcrumbItem href="https://google.fr"> Google </BreadcrumbItem>
                        <BreadcrumbItem to="#anchor"> Parent avec ancre </BreadcrumbItem>
                        <BreadcrumbItem> Parent </BreadcrumbItem>
                        <BreadcrumbItem active> Page en cours </BreadcrumbItem>
                    </Breadcrumb>
                    <Spacer size={SpacerSize.SEVEN}/>
                    <Section>
                        <Title level={6}>This CLI command is maintain by Cr3sus</Title>
                    </Section>
                </Section>
            </ScrollView>
        </SafeAreaView>
    </TrilogyThemeProvider>
  );
});

export default App;
