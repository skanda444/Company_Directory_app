import React from 'react';
import { Trash2 } from 'lucide-react';
import { Company } from '../types';
import { deleteCompany } from '../api';
import toast from 'react-hot-toast';

interface CompanyListProps {
  companies: Company[];
  onCompanyDeleted: () => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, onCompanyDeleted }) => {
  const [isDeleting, setIsDeleting] = React.useState<number | null>(null);

  const handleDelete = async (id: number) => {
    try {
      setIsDeleting(id);
      await deleteCompany(id);
      toast.success('Company deleted successfully');
      onCompanyDeleted();
    } catch (error) {
      toast.error('Failed to delete company');
      console.error(error);
    } finally {
      setIsDeleting(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company) => (
            <tr key={company.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.location}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleDelete(company.id)}
                  disabled={isDeleting === company.id}
                  className="text-red-600 hover:text-red-800 transition-colors inline-flex items-center disabled:opacity-50"
                >
                  {isDeleting === company.id ? (
                    <Trash2 className="h-4 w-4 animate-pulse" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                  <span className="ml-1">Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;