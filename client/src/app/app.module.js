import { WFMModule } from "framework";
import { appComponent } from "./app.component";
import { appHeader } from "./shared/app.header";
import { appRoutes } from "./app.routes";
import DataService from "./app.data.service";
import ExampleProvider from "./app.example.service";

class AppModule extends WFMModule {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [appHeader],
    bootstrap: appComponent,
    routes: appRoutes,
    providers: [ExampleProvider],
});
