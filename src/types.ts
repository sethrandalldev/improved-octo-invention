export interface Workspace {
  id: number;
  title: string;
  description: string;
  createdBy: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  workspaceIds: number[];
  projectIds: number[];
}

export interface Ticket {
  id: number;
  title: string;
  assignedTo: number;
  createdBy: number;
  status: string;
  priority: string;
  projectId: number;
  workspaceId: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  workspaceId: number;
  createdBy: number;
}

export interface WorkspaceInvitation {
  id: number;
  senderId: number;
  recipientId: number;
  workspaceId: number;
}
