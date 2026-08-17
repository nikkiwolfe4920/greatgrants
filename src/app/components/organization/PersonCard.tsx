import { Trash2 } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";

export interface PersonCardPerson {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  isPrimaryContact: boolean;
}

export interface PersonCardProps {
  /** Drives the card heading, the field id prefix, and the Figma variant tag. */
  role: "Leader" | "Board Member";
  index: number;
  person: PersonCardPerson;
  onChange: (field: keyof PersonCardPerson, value: string | boolean) => void;
  onTogglePrimary: () => void;
  onRemove: () => void;
  canRemove: boolean;
}

/**
 * One person's editable card on the Key Contacts tab. Used for both the
 * Leaders section and the Board Members section, which previously
 * duplicated this exact markup (header with badge/checkbox/delete, then a
 * Full Name/Email/Phone/Bio grid) wholesale.
 *
 * Field id prefixes ("leader-"/"board-") are preserved from the original
 * markup so existing DOM ids are unchanged.
 */
export function PersonCard({ role, index, person, onChange, onTogglePrimary, onRemove, canRemove }: PersonCardProps) {
  const idPrefix = role === "Leader" ? "leader" : "board";

  return (
    <div
      className="p-5 border border-gray-200 rounded-lg bg-white"
      data-figma-component="PersonCard"
      data-figma-variant={role}
    >
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-sm font-semibold text-gray-700">{role} {index + 1}</h4>
        <div className="flex items-center gap-3">
          {person.isPrimaryContact && (
            <Badge className="bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-50">
              Primary Contact
            </Badge>
          )}
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={person.isPrimaryContact}
              onCheckedChange={() => onTogglePrimary()}
              className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
            />
            <span className="text-xs text-gray-600">Primary Contact</span>
          </label>
          {canRemove && (
            <button
              onClick={onRemove}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Label htmlFor={`${idPrefix}-name-${person.id}`} className="text-xs text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id={`${idPrefix}-name-${person.id}`}
            value={person.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            placeholder="Enter full name"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor={`${idPrefix}-email-${person.id}`} className="text-xs text-gray-700">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id={`${idPrefix}-email-${person.id}`}
            type="email"
            value={person.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="email@example.org"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor={`${idPrefix}-phone-${person.id}`} className="text-xs text-gray-700">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            id={`${idPrefix}-phone-${person.id}`}
            type="tel"
            value={person.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="+1 (555) 173-4567"
            className="mt-1"
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor={`${idPrefix}-bio-${person.id}`} className="text-xs text-gray-700">
            Bio <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id={`${idPrefix}-bio-${person.id}`}
            value={person.bio}
            onChange={(e) => onChange('bio', e.target.value)}
            placeholder="This is my bio..."
            rows={3}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}
