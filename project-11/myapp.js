
class ProjectItem {
    constructor(id, updateProjectFunction){
        this.id = id;
        this.updateProjectHandler = updateProjectFunction
        this.connectMoreInfoButton();
        this.switchConnectButton();
    }


    connectMoreInfoButton(){

    }

    switchConnectButton(){
        const projectItem = document.getElementById(this.id);
        const switchButton = projectItem.querySelector('button:last-of-type');
      //  console.log(switchButton)

        switchButton.addEventListener('click',this.updateProjectHandler)
    }
}

class ProjectList{
    projects = []
    constructor(type){
           this.type = type;
           const projItems= document.querySelectorAll(`#${type}-projects li`)
           for(const prjItm of projItems)
           {
                this.projects.push(new ProjectItem(prjItm.id, this.switchProject.bind(this)))
           }

           console.log(this.projects)
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addSwtichProject(){
            console.log(this)
    }
    switchProject(projectId){
        
        //const projectIndex = this.projects.findIndex(p => p.id === projectId)
        //this.projects.splice(projectIndex,1)
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId)

    }
}

class App {

    static  init(){
        const activeProjects = new ProjectList('active')
        const finishedProjects = new ProjectList('finished')
        activeProjects.setSwitchHandlerFunction(finishedProjects.addSwtichProject.bind(finishedProjects))
        finishedProjects.setSwitchHandlerFunction(activeProjects.addSwtichProject.bind(activeProjects))
    }
}

App.init()




