import { NavigatorScreenParams } from "@react-navigation/native"


export type WorkoutParamList = {
    Work: NavigatorScreenParams<RootParamList>,
    BreathingInitial: undefined,
    Breathing: {duration: Number, inhaleTime: Number, exhaleTime: Number}
    End: undefined,
    Visualization: undefined
}

export type RootParamList = {
    Login: undefined,
    Register: undefined,
    Landing: undefined,
    WorkOut: undefined,
    Home: undefined
}

export type CustomizationParamList = {
    SettingsPage: undefined
    CustomizerStart: undefined //NavigatorScreenParams<RootParamList>,
    Customizer: undefined,
    Editor: undefined
}

export type SettingsParamList = {
    Profile: NavigatorScreenParams<RootParamList>,
    General: undefined,
}