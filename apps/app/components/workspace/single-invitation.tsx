// next
import { getFirstCharacters, truncateText } from "helpers/string.helper";
import Image from "next/image";
// react
import { useState } from "react";
// types
import { IWorkspaceMemberInvitation } from "types";

type Props = {
  invitation: IWorkspaceMemberInvitation;
  invitationsRespond: string[];
  handleInvitation: any;
};

const SingleInvitation: React.FC<Props> = ({
  invitation,
  invitationsRespond,
  handleInvitation,
}) => {
  const [isChecked, setIsChecked] = useState(invitationsRespond.includes(invitation.id));

  return (
    <>
      <li>
        <label
          className={`group relative flex cursor-pointer items-start space-x-3 border-2 border-transparent py-4`}
          htmlFor={invitation.id}
        >
          <div className="flex-shrink-0">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
              {invitation.workspace.logo && invitation.workspace.logo !== "" ? (
                <Image
                  src={invitation.workspace.logo}
                  height="100%"
                  width="100%"
                  className="rounded"
                  alt={invitation.workspace.name}
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center rounded-xl bg-gray-700 p-4 uppercase text-white">
                  {getFirstCharacters(invitation.workspace.name)}
                </span>
              )}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium">{truncateText(invitation.workspace.name, 30)}</div>
            <p className="text-sm text-brand-secondary">
              Invited by {invitation.workspace.owner.first_name}
            </p>
          </div>
          <div className="flex-shrink-0 self-center">
            <button
              className={`${
                invitationsRespond.includes(invitation.id)
                  ? "bg-brand-surface-2 text-brand-secondary"
                  : "bg-brand-accent text-white"
              } text-sm px-4 py-2 border border-brand-base rounded-3xl`}
              onClick={(e) => {
                handleInvitation(
                  invitation,
                  invitationsRespond.includes(invitation.id) ? "withdraw" : "accepted"
                );
              }}
            >
              {invitationsRespond.includes(invitation.id)
                ? "Invitation Accepted"
                : "Accept Invitation"}
            </button>
          </div>
        </label>
      </li>
    </>
  );
};

export default SingleInvitation;
