// Lyskov substitution principle

class Person{
    
}

class Member extends Person{
    access(){
        console.log('You have access');
    }
}

class Guest extends Person{
    constructor(){
        super();
        this.isGuest = true;
    }
}

class Frontend extends Member{
    canCreateFrontend(){}
}

class Backend extends Member{
    canCreateBackend(){}
}

class PersonFromDifferentCompany extends Guest{
    access(){
        throw new Error('Access denied!!!');
    }
}

function openSecretDoor(person){
    person.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany());

class Component{
    isComponent = true;
}

class ComponentWithTemplate extends Component{
    render(){
        return `<div>Component</div>`;
    }
}

class HigherOrderComponent extends Component{

}

class HeaderComponent extends Component{
    onInit(){}
}

class FooterComponent extends Component{
    afterInit(){}
}

class HOC extends Component{
    render(){
        throw new Error('Render is impossible here');
    }
}

function renderComponent(component){
    console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());