```Mermaid
graph TD;
    A[Start] --> B[Initialize Variables];
    B --> C[Check for Data in Local Storage];
    C -- Yes --> D[Load Tasks from Local Storage];
    C -- No --> E[Initialize Task List];
    D --> E[Initialize Task List];
    E --> F[Wait for User Input];
    
    F -->|Add New Task| G[Add Task to List];
    G --> H[Add Task to Local Storage];
    H --> I[Update UI with New Task];
    I --> F;
    
    F -->|Delete Task| J[Delete Task from List];
    J --> K[Update Local Storage];
    K --> L[Update UI After Deletion];
    L --> F;
    
    F -->|Mark Task as Complete| M[Change Task Status in List];
    M --> N[Update Local Storage];
    N --> O[Update UI to Reflect Status Change];
    O --> F;
    
    F -->|Edit Task| P[Edit Task Text];
    P --> Q[Update Local Storage after Edit];
    Q --> R[Update UI After Edit];
    R --> F;
    
    F -->|Load User Interface| S[Reload Tasks from Local Storage];
    S --> F;
    
    F --> T[End]
