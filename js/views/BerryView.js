class BerryView {

    constructor(element) {
        this._element = element;
    }

    _template(model) {
        return ` 
        <table class="table table-hover pure-table">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                ${model.berries.map(b =>
                         `
                        <tr class="pure-table-odd">
                            <td> <img src=${b.picture}> </td>
                            <td> ${b.name} </td>
                            <td> ${b.effect} </td>
                        </tr>
                        `   
                ).join('')}
            </tbody>
        </table>
        `;
    }

    update(model) {
        this._element.innerHTML = this._template(model);
    }
}