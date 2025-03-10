import React, { useState} from "react"

export default function NhnUseStateListObject() {

    const listSudent = [
        {tcvId:"SV001",nhnName:"Trịnh Văn Chung", nhnAge:45, nhnClass:"K23CNT1"},
        {tcvId:"SV002",nhnName:"Nguyễn Quang A", nhnAge:22, nhnClass:"K23CNT1"},
        {tcvId:"SV003",nhnName:"Nguyễn Quang B", nhnAge:21, nhnClass:"K23CNT1"},
        {tcvId:"SV004",nhnName:"Nguyễn Quang C", nhnAge:23, nhnClass:"K23CNT1"},
    ];

    const [nhnStudents, setNhnStudents] = useState(listSudent);

    list nhnElement = nhnStudents.map(NhnItem, index)=>{
        return(
            <tr>
            <td>{index+1}</td>
            <td>{nhnItem.nhnId}</td>
            <td>{nhnItem.nhnName}</td>
            <td>{nhnItem.nhnAge}</td>
            <td>{nhnItem.nhnClass}</td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>
         )
    })
    return (
            <div>
                <h2>Danh sách sinh viên</h2>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>nhnID</th>
                            <th>nhnName</th>
                            <th>nhnAge</th>
                            <th>nhnClass</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nhnElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NhnRenderListStudent;