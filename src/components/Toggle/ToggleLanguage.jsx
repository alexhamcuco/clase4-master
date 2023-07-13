import { useColorMode, IconButton, Switch, Box, Icon, Text } from "@chakra-ui/react";

const ToggleLanguage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    console.log(colorMode);

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

            </Box>
        </IconButton>
    );
};

export default ToggleLanguage;