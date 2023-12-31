import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        hot: true,
        historyApiFallback: true,
        client: {
            overlay: false,
        },
    };
}
