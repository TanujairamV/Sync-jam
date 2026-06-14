import React from "react";
import {
    X,
    Users,
    Copy,
    LogOut,
    TriangleAlert,
    UserX,
    ListMusic,
    SkipBack,
    SkipForward,
    Play,
    Pause,
    Settings,
    GripVertical,
    Music

} from "lucide-react";

export const Icons = Object.freeze({
    close: <X size={18} />,

    people: <Users size={15} />,
    kick: <UserX size={14} />,

    copy: <Copy size={14} />,
    jam: <Music size={20} />,

    leave: <LogOut size={14} />,
    queue: <ListMusic size={15} />,

    prev: <SkipBack size={20} />,
    play: <Play size={28} fill="currentColor" />,
    pause: <Pause size={28} fill="currentColor" />,
    next: <SkipForward size={20} />,
    playItem: <Play size={12} fill="currentColor" />,

    settings: <Settings size={14} />,
    warn: <TriangleAlert size={14} />,
    drag: <GripVertical size={14} style={{ opacity: 0.25 }} />
})