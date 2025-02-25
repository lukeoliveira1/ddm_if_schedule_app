import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fefefe;
  font-weight: bold;
  text-align: center;
  font-family: "Roboto_700Bold";
`;

export const Logo = styled.Image`
  margin-top: 100px;
  margin-bottom: 70px;
  width: 120px;
  height: 160px;
`;

export const TextInput = styled.TextInput`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Roboto_400Regular";
`;

export const ViewForm = styled.View`
  flex: 1;
  align-items: "center";
  justify-content: "center";
  margin-top: 50px;
`;

export const CustomButton = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-family: "Roboto_500Medium";
  color: ${({ theme }) => theme.colors.background};
`;
