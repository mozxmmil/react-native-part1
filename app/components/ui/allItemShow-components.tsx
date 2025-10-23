import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { statusShowing } from "@/utils/statusShowing";
import { cn } from "@/utils";

interface AllItemShowProps {
	data: {
		id: number;
		title: string;
		status: string;
	}[];
}

export default function AllItemShow({ data }: AllItemShowProps) {
	const [currentActive, setcurrentActive] = useState(0);
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => String(item.id)}
			ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
			renderItem={({ item }) => {
				return (
					<Pressable
						onPress={() => setcurrentActive(item.id)}
						className={cn(
							"flex-row justify-between items-center p-2 bg-gray-200",
							currentActive === item.id && "bg-gray-400"
						)}
					>
						<Text>{item.title}</Text>
						<Text
							className={cn(
								statusShowing(item.status),
								"px-2 py-1 rounded"
							)}
						>
							{item.status}
						</Text>
					</Pressable>
				);
			}}
		></FlatList>
	);
}
