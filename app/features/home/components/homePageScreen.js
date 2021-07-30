'use strict';
import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";


export default class homePageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.props.serviceApiCall();
    }

    componentWillUnmount() {

    }

    _functionTime() {
        return this.props.info.datetime + ""
    }

    render() {
        return (
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
            }]}>
                <View style={[styles.bodystyle]}>

                    {!this.props.isLoading &&
                        <View style={[styles.bodyHead]}>
                            <Text style={[styles.textHeadStyle]}>{"Date Time"}</Text>
                            <Text style={[styles.textStyle]}>{"Zone: " + this.props.info.timezone}</Text>
                            <Text style={[styles.textStyle]}>{this._functionTime()}</Text>
                        </View>
                    }

                    {this.props.isLoading &&
                        <ActivityIndicator size="large"
                            style={{
                                height: '100%', width: '100%', alignItems: 'center',
                            }}
                        />
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodystyle: {
        backgroundColor: "#B8B8B8",
        height: "100%",
        width: "100%",
    },
    textHeadStyle: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyHead: {
        backgroundColor: "#F7F4E8",
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 300
    }

});

