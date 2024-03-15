import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'system',
    useSystemColormode: true,
}

const theme = extendTheme({ config })

export default theme