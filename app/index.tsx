import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComp from "./components/button-Components";
import AllItemShow from "./components/ui/allItemShow-components";

export default function Index() {
	const [currentActive, setcurrentActive] = useState(0);
	const handlePress = (index: number) => {
		setcurrentActive(index);
	};

    const data = [
        {
            id: 1,
            title: "Item 1",
            status: "Pending",
        },
        {
            id: 2,
            title: "Item 2",
            status: "Pending",
        },
        {
            id: 3,
            title: "Item 3",
            status: "Pending",
        },
        {
            id: 4,
            title: "Item 4",
            status: "Pending",
        },
        {
            id: 5,
            title: "Item 5",
            status: "Pending",
        },
    ];
	const RenderItem = (currentActive: number) => {
		switch (currentActive) {
			case 0:
				return <AllItemShow data={data} />;
			case 1:
				return <Text className=""> Pending Item</Text>;
			case 2:
				return <Text className=""> Complete Item</Text>;
			default:
				return <Text> All Item</Text>;
		}
	};
	return (
		<SafeAreaView
			className="bg-gray-600"
			style={{
				flex: 1,
				padding: 15,
			}}
		>
			<View
				style={{
					backgroundColor: "",
					display: "flex",
					flexDirection: "row",
					gap: 10,
				}}
			>
				<ButtonComp
					Style={{
						backgroundColor: "white",
						padding: 10,
						borderRadius: 5,
						alignSelf: "flex-start",
					}}
					tilte="All Item"
					onPress={() => handlePress(0)}
				/>
				<ButtonComp
					Style={{
						backgroundColor: "white",
						padding: 10,
						borderRadius: 5,
						alignSelf: "flex-start",
					}}
					tilte="Pending Item"
					onPress={() => handlePress(1)}
				/>
				<ButtonComp
					Style={{
						backgroundColor: "white",
						padding: 10,
						borderRadius: 5,
						alignSelf: "flex-start",
					}}
					tilte="Complete Item"
					onPress={() => handlePress(2)}
				/>
			</View>

			<View
				style={{
					backgroundColor: "white",
					padding: 10,
					borderRadius: 5,
					marginTop: 15,
				}}
			>
				{RenderItem(currentActive)}
			</View>
		</SafeAreaView>
	);
}
