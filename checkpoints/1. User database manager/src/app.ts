let usersLength: number = 0;

enum UserStatus {
    Active = "Active",
    Inactive = "Inactive",
    Suspended = "Suspended"
}

interface User {
    id: number,
    name: string,
    email: string,
    status: UserStatus 
}

class UserManager {
    users: User[] = new Array();

    addUser(user: User): void {
        this.users.push(user)
    }

    getUserById(id: number): User | undefined {
        let userBox: User | undefined;

        this.users.forEach(user => {
            if(user.id === id)
                userBox = user
        })

        return userBox
    }

    updateStatus(id: number, status: UserStatus): void {
        let userBox: User | undefined;

        this.users.forEach(user => {
            if(user.id === id)
                userBox = user;
        })

        if(userBox)
            userBox.status = status
    }
}

const manager = new UserManager();

const addUserButton: HTMLElement | null = document.querySelector("#addUserButton");

if(addUserButton) {
    addUserButton.addEventListener('click', () => {
        const newUser: User = {
            id: usersLength,
            name: "Kacper",
            email: "kacper.goluchowski@o2.pl",
            status: UserStatus.Inactive
        }

        manager.addUser(newUser);
        
        usersLength++;
    })
}


const displayUserButton: HTMLElement | null = document.querySelector("#displayUserButton");

if (displayUserButton) {
    displayUserButton.addEventListener('click', () => {
        let userIdPrompt: string | null = prompt("Podaj id użytkownika");

        if (userIdPrompt) {
            const userId: number = Number(userIdPrompt);

            console.log(manager.getUserById(userId));
        }
    });
}

const editUserStatusButton: HTMLElement | null = document.querySelector("#editUserStatusButton");

if(editUserStatusButton) {
    editUserStatusButton.addEventListener('click', () => {
        let userIdPrompt: string | null = prompt("Podaj id użytkownika");

        if(userIdPrompt) {
            const userId:number = Number(userIdPrompt)

            manager.updateStatus(userId, UserStatus.Active);
        }
    })
}