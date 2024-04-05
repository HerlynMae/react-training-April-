import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaArchive } from "react-icons/fa";
import { MdOutlineRestore } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const ParentTable = ({ parents, setDataEdit, setIsAdd }) => {
  const handleEdit = (child) => {
    setDataEdit(child);
    setIsAdd(true);
  };
  let count = 1;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {parents.map((child) => {
            return (
              <tr key={child.aid}>
                <td>{count++}</td>
                <td>{child.name}</td>
                <td>{child.address}</td>
                <td>{child.email}</td>
                <td>
                  <ul className="flex gap-2">
                    {child.isActive === 1 ? (
                      <>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="edit"
                            onClick={() => handleEdit(child)}
                          >
                            <CiEdit />
                          </button>
                        </li>
                        <li>
                          <button>
                            <FaArchive />
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <button>
                            <MdOutlineRestore />
                          </button>
                        </li>
                        <li>
                          <button>
                            <MdDelete />
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ParentTable;
