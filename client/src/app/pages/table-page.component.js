import { WFMComponent, router, dom } from "framework";

class TablePageComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }

    events() {
        return {
            "click .js-link": "goToHome",
        };
    }

    goToHome(event) {
        event.preventDefault();
        router.setRoute("/");
    }

    onInit() {
        super.onInit();

        this.getUsers();
    }

    afterInit() {
        const table = this.el.find("#table-users");
        console.log(table);
    }

    getUsers() {}
}

export const tablePageComponent = new TablePageComponent({
    selector: "table-of-users",
    template: `
        <div class="table-users__block">
            <table class="users" id="table-users">
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Логин</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Телефон</th>
                    <th>Email</th>
                    <th>Фото</th>
                </tr>
                <tr>
                    <td>Microsoft</td>
                    <td>20.3</td>
                    <td>30.5</td>
                    <td>23.5</td>
                    <td>40.3</td>
                    <td>40.3</td>
                    <td>40.3</td>
                    <td>40.3</td>
                </tr>
                <tr>
                    <td>Google</td>
                    <td>50.2</td>
                    <td>40.63</td>
                    <td>45.23</td>
                    <td>39.3</td>
                    <td>39.3</td>
                    <td>39.3</td>
                    <td>39.3</td>
                </tr>
                <tr>
                    <td>Apple</td>
                    <td>25.4</td>
                    <td>30.2</td>
                    <td>33.3</td>
                    <td>36.7</td>
                    <td>36.7</td>
                    <td>36.7</td>
                    <td>36.7</td>
                </tr>
                <tr>
                    <td>IBM</td>
                    <td>20.4</td>
                    <td>15.6</td>
                    <td>22.3</td>
                    <td>29.3</td>
                    <td>29.3</td>
                    <td>29.3</td>
                    <td>29.3</td>
                </tr>
            </tbody>
        </table>
        </div>            
        <div class="link__block">
            <a href="#not-existing-path" class="js-link nav__link">Перейти на главную</a>  
        </div>
    `,
    styles: `
        .table-users__block {display: flex; justify-content: center; margin-top: 30px; color: black;}
    `,
});
