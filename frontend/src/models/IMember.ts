import { PackageInterface } from "./IPackage";

export interface MemberInterface { //จาวาสคริปอ็อบเจ็ค
    ID: number,
    Member_Name: string,
    Email: string,
    Password: string,
    Tel: string,
    Package_ID: number,
    Package: PackageInterface,
}