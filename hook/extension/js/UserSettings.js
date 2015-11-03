var userSettings = {
    extensionHasJustUpdated: false,
    localStorageMustBeCleared: false,
    userGender: 'men',
    userMaxHr: 185,
    userRestHr: 50,
    userFTP: 300,
    userHrrZones: [
        {
            fromHrr: 30,
            toHrr: 50,
        },
        {
            fromHrr: 50,
            toHrr: 60,
        },
        {
            fromHrr: 60,
            toHrr: 70,
        },
        {
            fromHrr: 70,
            toHrr: 80,
        },
        {
            fromHrr: 80,
            toHrr: 90,
        },
        {
            fromHrr: 90,
            toHrr: 100,
        },
        {
            fromHrr: 100,
            toHrr: 110,
        }
    ],
    zones: {
        speed: [{
            from: 0,
            to: 6
        }, {
            from: 6,
            to: 9
        }, {
            from: 9,
            to: 12
        }, {
            from: 12,
            to: 15
        }, {
            from: 15,
            to: 18
        }, {
            from: 18,
            to: 21
        }, {
            from: 21,
            to: 24
        }, {
            from: 24,
            to: 27
        }, {
            from: 27,
            to: 30
        }, {
            from: 30,
            to: 33
        }, {
            from: 33,
            to: 36
        }, {
            from: 36,
            to: 39
        }, {
            from: 39,
            to: 42
        }, {
            from: 42,
            to: 45
        }, {
            from: 45,
            to: 50
        }, {
            from: 50,
            to: 75
        }, {
            from: 75,
            to: 100
        }],
        pace: [{
            from: 150,
            to: 180
        }, {
            from: 180,
            to: 200
        }, {
            from: 200,
            to: 220
        }, {
            from: 220,
            to: 240
        }, {
            from: 240,
            to: 260
        }, {
            from: 260,
            to: 280
        }, {
            from: 280,
            to: 300
        }, {
            from: 300,
            to: 320
        }, {
            from: 320,
            to: 340
        }, {
            from: 340,
            to: 360
        }, {
            from: 360,
            to: 390
        }, {
            from: 390,
            to: 420
        }, {
            from: 420,
            to: 540
        }, {
            from: 540,
            to: 720
        }, {
            from: 720,
            to: 900
        }],
        power: [{
            from: 0,
            to: 50
        }, {
            from: 50,
            to: 100
        }, {
            from: 100,
            to: 150
        }, {
            from: 150,
            to: 200
        }, {
            from: 200,
            to: 250
        }, {
            from: 250,
            to: 300
        }, {
            from: 300,
            to: 350
        }, {
            from: 350,
            to: 400
        }, {
            from: 400,
            to: 450
        }, {
            from: 450,
            to: 500
        }, {
            from: 500,
            to: 600
        }, {
            from: 600,
            to: 700
        }, {
            from: 700,
            to: 800
        }, {
            from: 800,
            to: 1000
        }, {
            from: 1000,
            to: 1200
        }, {
            from: 1200,
            to: 1500
        }],
        cyclingCadence: [{
            from: 0,
            to: 10
        }, {
            from: 10,
            to: 20
        }, {
            from: 20,
            to: 30
        }, {
            from: 30,
            to: 40
        }, {
            from: 40,
            to: 50
        }, {
            from: 50,
            to: 60
        }, {
            from: 60,
            to: 70
        }, {
            from: 70,
            to: 75
        }, {
            from: 75,
            to: 80
        }, {
            from: 80,
            to: 85
        }, {
            from: 85,
            to: 90
        }, {
            from: 90,
            to: 95
        }, {
            from: 95,
            to: 100
        }, {
            from: 100,
            to: 105
        }, {
            from: 105,
            to: 110
        }, {
            from: 110,
            to: 120
        }, {
            from: 120,
            to: 150
        }],
        runningCadence: [{
            from: 0,
            to: 30
        }, {
            from: 30,
            to: 40
        }, {
            from: 40,
            to: 45
        }, {
            from: 45,
            to: 48
        }, {
            from: 48,
            to: 51
        }, {
            from: 51,
            to: 54
        }, {
            from: 54,
            to: 57
        }, {
            from: 57,
            to: 60
        }, {
            from: 60,
            to: 63
        }, {
            from: 63,
            to: 66
        }, {
            from: 66,
            to: 70
        }, {
            from: 70,
            to: 75
        }, {
            from: 75,
            to: 80
        }, {
            from: 80,
            to: 85
        }, {
            from: 85,
            to: 90
        }, {
            from: 90,
            to: 100
        }, {
            from: 100,
            to: 120
        }],
        grade: [{
            from: -30,
            to: -20
        }, {
            from: -20,
            to: -15
        }, {
            from: -15,
            to: -12
        }, {
            from: -12,
            to: -9
        }, {
            from: -9,
            to: -6
        }, {
            from: -6,
            to: -3
        }, {
            from: -3,
            to: -1
        }, {
            from: -1,
            to: 1
        }, {
            from: 1,
            to: 3
        }, {
            from: 3,
            to: 6
        }, {
            from: 6,
            to: 9
        }, {
            from: 9,
            to: 12
        }, {
            from: 12,
            to: 15
        }, {
            from: 15,
            to: 20
        }, {
            from: 20,
            to: 30
        }]

    },
    remoteLinks: true,
    feedAutoScroll: true,
    defaultLeaderboardFilter: 'overall',
    activateRunningGradeAdjustedPace: true,
    activateRunningHeartRate: true,
    activityGoogleMapType: 'satellite',
	customMapboxStyle: 'mapbox.outdoors',
    hidePremiumFeatures: true,
    displaySegmentRankPercentage: true,
    displayNearbySegments: true,
    displayMotivationScore: true,
    displayActivityRatio: true,
    displayAdvancedPowerData: true,
    displayAdvancedSpeedData: true,
    displayAdvancedHrData: true,
    displayCadenceData: true,
    displayAdvancedGradeData: true,
    displayBikeOdoInActivity: true,
    enableBothLegsCadence: false,
    feedHideChallenges: false,
    feedHideCreatedRoutes: false,
    highLightStravistiXFeature: false, // For heartrate related data.
    displaySegmentTimeComparisonToKOM: true,
    displaySegmentTimeComparisonToPR: true,
    reviveGoogleMaps: true,
    reviveGoogleMapsLayerType: 'hybrid'
};
