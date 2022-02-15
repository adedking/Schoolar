<Grid columns={1}>
                <Grid.Column>
                    <Checkbox
                    checked={visible}
                    label={{ children: <code>visible</code> }}
                    onChange={() => setVisible(!visible)}
                    />
                </Grid.Column>

                <Grid.Column>
                <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                    </Menu.Item>
                    <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic>
                    <div id="main-app">
                            <div id="main-app-page">
                                {/* <NavBar/> */}
                                <Switch>
                                    <Route exact path="/">
                                        <Dashboard />
                                    </Route>
                                    <Route exact path="/dashboard">
                                        <Dashboard />
                                    </Route>
                                    <Route exact path="/employees">
                                        <Employees />
                                    </Route>
                                </Switch>
                            </div>
                    </div>
                    </Segment>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Grid.Column>
            </Grid>