export interface IDemoButton {
	label: string;
	screen: string;
	params?: any;
}

export interface IDemoButtonGroup {
	title: string;
	buttons: Array<IDemoButton>;
}

const devToolButtons: IDemoButtonGroup = {
	title: "Dev Tools",
	buttons: [
		{
			label: "Component Demo Page",
			screen: "DemoPage",
		},
	],
};

const welcomeWalkthroughButtons: IDemoButtonGroup = {
	title: "Welcome Walkthrough",
	buttons: [
		{
			label: "Splash Screen (React)",
			screen: "SplashScreen",
		},
		{
			label: "Welcome Carousel",
			screen: "AuthenticationNavigator",
			params: {
				screen: "WelcomeWalkthroughNavigator",
				params: {
					screen: "WelcomeCarousel",
				},
			},
		},
		{
			label: "Welcome Landing/Login",
			screen: "AuthenticationNavigator",
			params: {
				screen: "WelcomeWalkthroughNavigator",
				params: {
					screen: "WelcomeLandingPage",
				},
			},
		},
	],
}

const kycApplicationProcessButtons: IDemoButtonGroup = {
	title: "KYC Application Process",
	buttons: [
		{
			label: "KYC Application 1",
			screen: "AuthenticationNavigator",
			params: {
				screen: "KYCApplicationProcessNavigator",
				params: {
					screen: "KYCApplicationStep1",
				},
			},
		},
		{
			label: "KYC Application 2",
			screen: "AuthenticationNavigator",
			params: {
				screen: "KYCApplicationProcessNavigator",
				params: {
					screen: "KYCApplicationStep2",
				},
			},
		},
		{
			label: "KYC Application Success",
			screen: "AuthenticationNavigator",
			params: {
				screen: "KYCApplicationProcessNavigator",
				params: {
					screen: "KYCApplicationSuccess",
				},
			},
		},
	],
};

const riskAssessmentButtons: IDemoButtonGroup = {
	title: "Risk Assessment Test",
	buttons: [
		{
			label: "Risk Assessment 1",
			screen: "AuthenticationNavigator",
			params: {
				screen: "RiskAssessmentTestNavigator",
				params: {
					screen: "RiskAssessmentStep1",
				},
			},
		},
		{
			label: "Risk Assessment 2",
			screen: "AuthenticationNavigator",
			params: {
				screen: "RiskAssessmentTestNavigator",
				params: {
					screen: "RiskAssessmentStep2",
				},
			},
		},
		{
			label: "Risk Assessment Results",
			screen: "AuthenticationNavigator",
			params: {
				screen: "RiskAssessmentTestNavigator",
				params: {
					screen: "RiskAssessmentResults",
				},
			},
		},
		{
			label: "Risk Assessment Recomm.",
			screen: "AuthenticationNavigator",
			params: {
				screen: "RiskAssessmentTestNavigator",
				params: {
					screen: "RiskAssessmentRecommendations",
				},
			},
		},
	],
};

const investmentFlowButtons: IDemoButtonGroup = {
	title: "Investment Flow",
	buttons: [
		{
			label: "Payment Method",
			screen: "AuthenticationNavigator",
			params: {
				screen: "InvestmentFlowNavigator",
				params: {
					screen: "PaymentMethod",
				},
			},
		},
		{
			label: "Amount to Invest",
			screen: "AuthenticationNavigator",
			params: {
				screen: "InvestmentFlowNavigator",
				params: {
					screen: "AmountToInvest",
				},
			},
		},
		{
			label: "Select an Account",
			screen: "AuthenticationNavigator",
			params: {
				screen: "InvestmentFlowNavigator",
				params: {
					screen: "SelectAccount",
				},
			},
		},
		{
			label: "Review Details",
			screen: "AuthenticationNavigator",
			params: {
				screen: "InvestmentFlowNavigator",
				params: {
					screen: "ReviewDetails",
				},
			},
		},
		{
			label: "Investment Success",
			screen: "AuthenticationNavigator",
			params: {
				screen: "InvestmentFlowNavigator",
				params: {
					screen: "InvestmentSuccess",
				},
			},
		},
	],
};

const dashboardButtons: IDemoButtonGroup = {
	title: "Dashboard",
	buttons: [
		{
			label: "Dashboard Home",
			screen: "DashboardNavigator",
			params: {
				screen: "DashboardHomeNavigator",
				params: {
					screen: "DashboardHome",
				},
			},
		},
		{
			label: "My Rocket",
			screen: "DashboardNavigator",
			params: {
				screen: "MyRocketNavigator",
				params: {
					screen: "MyRocketMain",
				},
			},
		},
		{
			label: "Products",
			screen: "DashboardNavigator",
			params: {
				screen: "ProductsNavigator",
				params: {
					screen: "ProductsMain",
				},
			},
		},
		{
			label: "Messages",
			screen: "DashboardNavigator",
			params: {
				screen: "MessagesNavigator",
				params: {
					screen: "MessagesMain",
				},
			},
		},
		{
			label: "Profile",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "ProfileMain",
				},
			},
		},
	],
}

const dreamCalculatorButtons: IDemoButtonGroup = {
	title: "Dream Calculator",
	buttons: [
		{
			label: "Goals 1",
			screen: "DashboardNavigator",
			params: {
				screen: "DashboardHomeNavigator",
				params: {
					screen: "DreamCalculatorNavigator",
					params: {
						screen: "GoalsStep1",
					},
				},
			},
		},
		{
			label: "Goals 2",
			screen: "DashboardNavigator",
			params: {
				screen: "DashboardHomeNavigator",
				params: {
					screen: "DreamCalculatorNavigator",
					params: {
						screen: "GoalsStep2",
					},
				},
			},
		},
		{
			label: "Goals 3",
			screen: "DashboardNavigator",
			params: {
				screen: "DashboardHomeNavigator",
				params: {
					screen: "DreamCalculatorNavigator",
					params: {
						screen: "GoalsStep3",
					},
				},
			},
		},
		{
			label: "Adjust Goal",
			screen: "DashboardNavigator",
			params: {
				screen: "DashboardHomeNavigator",
				params: {
					screen: "DreamCalculatorNavigator",
					params: {
						screen: "AdjustGoal",
					},
				},
			},
		},
		{
			label: "Upload Goal Image",
			screen: "DashboardNavigator",
			params: {
				screen: "DashboardHomeNavigator",
				params: {
					screen: "DreamCalculatorNavigator",
					params: {
						screen: "UploadGoalImage",
					},
				},
			},
		},
	],
};

const myRocketButtons: IDemoButtonGroup = {
	title: "My Rocket",
	buttons: [
		{
			label: "My Rocket",
			screen: "DashboardNavigator",
			params: {
				screen: "MyRocketNavigator",
				params: {
					screen: "MyRocketMain",
				},
			},
		},
	],
};

const profileButtons: IDemoButtonGroup = {
	title: "Profile",
	buttons: [
		{
			label: "Profile Main",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "ProfileMain",
				},
			},
		},
		{
			label: "Get Crystals",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "ProfileGetCrystals",
				},
			},
		},
		{
			label: "Account Settings",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "AccountSettings",
				},
			},
		},
		{
			label: "Change Email",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "ChangeEmail",
				},
			},
		},
		{
			label: "Change Pin",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "ChangePin",
				},
			},
		},
		{
			label: "Bank Account List",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "ProfileBankAccountList",
				},
			},
		},
		{
			label: "Add Bank Account",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "ProfileAddBankAccount",
				},
			},
		},
		{
			label: "Edit Bank Account",
			screen: "DashboardNavigator",
			params: {
				screen: "ProfileNavigator",
				params: {
					screen: "ProfileEditBankAccount",
				},
			},
		},
	]
};

const messagesButtons: IDemoButtonGroup = {
	title: "Messages",
	buttons: [
		{
			label: "Messages",
			screen: "DashboardNavigator",
			params: {
				screen: "MessagesNavigator",
				params: {
					screen: "MessagesMain",
				},
			},
		},
	],
};

const productsButtons: IDemoButtonGroup = {
	title: "Products",
	buttons: [
		{
			label: "Products",
			screen: "DashboardNavigator",
			params: {
				screen: "ProductsNavigator",
				params: {
					screen: "ProductsMain",
				},
			},
		},
		{
			label: "Products Details",
			screen: "DashboardNavigator",
			params: {
				screen: "ProductsNavigator",
				params: {
					screen: "ProductsDetails",
				},
			},
		},
	],
}

export const demoButtons: Array<IDemoButtonGroup> = [
	devToolButtons,
	welcomeWalkthroughButtons,
	kycApplicationProcessButtons,
	riskAssessmentButtons,
	investmentFlowButtons,
	dashboardButtons,
	dreamCalculatorButtons,
	myRocketButtons,
	profileButtons,
	messagesButtons,
	productsButtons,
];
