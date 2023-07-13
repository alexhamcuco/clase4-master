import { useColorMode, IconButton, Switch, Box, Icon, Text } from "@chakra-ui/react";
import { MdSettings } from 'react-icons/md';

const ToggleLanguage = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
        >
            <Box display="inline-block" position="relative">
                <Text
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="12px"
                >
                    {colorMode === "light" ? "S" : "E"}
                </Text>
                <Icon
                    as={MdSettings}
                    boxSize={6} // Tamaño del icono
                />
            </Box>
        </IconButton>
    );
};

export default ToggleLanguage;