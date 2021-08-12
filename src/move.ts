// Please update this type as same as with the data shape.
type File ={
    id: string,
    name?: string,
}

type List = {
    id : string,
    name: string,
    files: File[]
}[];
export default function move(List : List, fileId : string, toFolderId : string): List {
    if(List.length < 1)
    throw('This resource cannot be empty');

    let sfile: File | null = null;
    let nList:List  = [...List];
      nList = List.map((folder)=>{
        if(folder.id === fileId)
        throw('You cannot move a folder');

        
        // let findex = 0;

        let lfiles: File[] | null  =folder.files.filter((file)=>{
           if(file.id === toFolderId)
           throw('You cannot specify a file as the destination')
           

           if(file.id === fileId){
           
            sfile = file;
            
            return false;
           }
           

           return true;
        })
     
        folder.files = lfiles;

        return folder;
    })
    nList = nList.map(folder => {
        if(folder.id === toFolderId){
            if(sfile)
            folder.files.push(sfile );
        }
        return folder;
    });
    return nList;
    
}